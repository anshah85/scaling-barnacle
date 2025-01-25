import React from 'react';

const DebrisCleanup: React.FC = () => {
  return (
    <main className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Debris Cleanup Guide</h1>
        <p>
          Cleaning up debris after a wildfire requires careful planning and 
          adherence to safety measures. Below you’ll find general guidelines 
          for handling different debris types, recommended protective gear, 
          and disposal tips.
        </p>
      </section>

      {/* Before You Begin Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Before You Begin</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Check Local Advisories:</strong> Ensure the area is no 
            longer under evacuation orders or active fire hazards.
          </li>
          <li>
            <strong>Wear Protective Gear:</strong> Use N95 masks, gloves, 
            safety goggles, and sturdy footwear.
          </li>
          <li>
            <strong>Secure Proper Permits:</strong> Some areas may require 
            permits or official clearance for debris removal.
          </li>
          <li>
            <strong>Consider Professional Help:</strong> If you suspect 
            hazardous materials (asbestos, chemicals, etc.), consult 
            professional cleanup services.
          </li>
        </ul>
      </section>

      {/* Types of Debris */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Handling Different Debris Types</h2>

        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-medium">1. Ash & Charred Materials</h3>
          <p className="mt-2">
            - Wet down the ash to minimize airborne particles.  
            - Use a shovel or sifter to remove larger debris.  
            - Collect ash in heavy-duty plastic bags for disposal.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-medium">2. Green Waste (Trees, Branches)</h3>
          <p className="mt-2">
            - Wear long sleeves and gloves to avoid splinters.  
            - Cut larger branches into manageable lengths.  
            - Place green waste in compost or yard waste bins if allowed locally.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-medium">3. Hazardous Materials (Chemicals, Asbestos)</h3>
          <p className="mt-2">
            - Do <strong>not</strong> handle suspicious materials on your own.  
            - Contact professional services or county hazardous waste facilities.  
            - Keep children and pets away until properly removed.
          </p>
        </div>
      </section>

      {/* Disposal and Sorting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Disposal & Sorting</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Separate Recyclables:</strong> Metal and glass that remain 
            intact can often be recycled if free from toxins.
          </li>
          <li>
            <strong>Dispose of Ash Safely:</strong> Double-bag ash or charred 
            debris in heavy-duty plastic. Check local regulations for drop-off 
            sites.
          </li>
          <li>
            <strong>Use Approved Landfills:</strong> Confirm if your waste 
            transfer station accepts fire-related debris.
          </li>
        </ol>
      </section>

      {/* Additional Resources Section */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://www.epa.gov/natural-disasters/wildfires"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              EPA Wildfire Cleanup & Disaster Info
            </a>
          </li>
          <li>
            <a
              href="https://calepa.ca.gov/disaster/fire/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              CalEPA: Post-Fire Debris Management
            </a>
          </li>
          <li>
            <a
              href="https://fire.lacounty.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LA County Fire Department
            </a>
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section>
        <p className="text-sm text-red-600">
          <strong>Disclaimer:</strong> This guidance is for general informational 
          purposes only. For official instructions, consult your local fire 
          department or public health agency.
        </p>
      </section>
    </main>
  );
};

export default DebrisCleanup;
