import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
// LangChain + OpenAI
import { OpenAI } from 'langchain/llms/openai';
import { LLMChain } from 'langchain/chains';
import { PromptTemplate } from 'langchain/prompts';

config(); // Loads variables from .env

const app = express();
app.use(cors());
app.use(express.json());

// Simple prompt template for generating suggestions
const prompt = new PromptTemplate({
  template: `You are a helpful assistant for wildfire debris cleanup. 
Given the user input, provide short suggestions or tips.

User Input: {userInput}

Suggestions:`,
  inputVariables: ['userInput'],
});

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY, // from .env
  temperature: 0.7,
  modelName: 'gpt-3.5-turbo', // or 'text-davinci-003'
});

const chain = new LLMChain({ llm, prompt });

// Endpoint to handle user input and get suggestions
app.post('/api/generate', async (req: Request, res: Response) => {
  try {
    const { userInput } = req.body;
    if (!userInput) {
      return res.status(400).json({ error: 'No user input provided' });
    }

    // Pass user input to our LLM chain
    const output = await chain.call({ userInput });

    return res.json({ suggestions: output.text });
  } catch (error: any) {
    console.error('Error in /api/generate:', error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
