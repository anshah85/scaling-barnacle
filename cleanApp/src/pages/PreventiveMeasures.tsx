import React from 'react';

const PreventiveMeasures: React.FC = () => {
  return (
    <main className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Wildfire Prevention & Preparation</h1>
        <p>
          Taking steps to prevent wildfires and protect your home can greatly reduce 
          potential damage. Below you’ll find recommended strategies, from creating 
          defensible space around your property to preparing an emergency plan.
        </p>
      </section>

      {/* Defensible Space */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Create Defensible Space</h2>
        <p>
          A “defensible space” is a buffer between a building on your property and any 
          shrubs, trees, or vegetation that might catch fire. This space helps slow or 
          stop the spread of fire.
        </p>
        <ul className="list-disc list-inside space-y-2 bg-gray-100 p-4 rounded">
          <li>
            <strong>Zone 1 (0–30 ft):</strong> Remove dead plants, grass, and weeds; prune 
            branches that hang near your home or roof.
          </li>
          <li>
            <strong>Zone 2 (30–100 ft):</strong> Reduce or thin vegetation; keep it well-spaced 
            to prevent the rapid spread of fire.
          </li>
          <li>
            <strong>Remove Combustibles:</strong> Keep flammables (wood piles, propane tanks) 
            away from structures.
          </li>
        </ul>
      </section>

      {/* Home Hardening */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Harden Your Home</h2>
        <p>
          “Home hardening” means using fire-resistant materials and methods to better protect 
          your house from embers and flames.
        </p>
        <ul className="list-disc list-inside space-y-2 bg-gray-100 p-4 rounded">
          <li>
            <strong>Roofing & Vents:</strong> Use Class A fire-rated roofing. Install mesh 
            screens over vents to block embers.
          </li>
          <li>
            <strong>Exterior Walls & Siding:</strong> Consider fire-resistant materials like 
            stucco, fiber cement siding, or metal.
          </li>
          <li>
            <strong>Windows & Doors:</strong> Use multi-pane or tempered glass. Keep 
            weather-stripping in good repair.
          </li>
        </ul>
      </section>

      {/* Emergency Plan */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Develop an Emergency Plan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Evacuation Routes:</strong> Know at least two ways out of your neighborhood 
            and designate a meeting place.
          </li>
          <li>
            <strong>Go-Bag Ready:</strong> Prepare an emergency kit with essential items 
            (medications, documents, clothing, water, flashlight).
          </li>
          <li>
            <strong>Family Communication Plan:</strong> Ensure everyone knows how to contact 
            each other if separated.
          </li>
        </ul>
      </section>

      {/* Landscaping Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Fire-Safe Landscaping Tips</h2>
        <p>
          Landscaping with fire safety in mind can significantly reduce your property’s 
          vulnerability.
        </p>
        <ul className="list-disc list-inside space-y-2 bg-gray-100 p-4 rounded">
          <li>
            <strong>Use Fire-Resistant Plants:</strong> Succulents and other plants with 
            high moisture content are less flammable.
          </li>
          <li>
            <strong>Clear Dry Leaves & Debris:</strong> Regularly clean gutters, roofs, and 
            around decks or porches.
          </li>
          <li>
            <strong>Trim & Space Out:</strong> Keep trees trimmed and ensure spacing 
            prevents fire from easily jumping from plant to plant.
          </li>
        </ul>
      </section>

      {/* Additional Resources Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <a
              href="https://www.readyforwildfire.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ReadyForWildfire.org (CAL FIRE)
            </a>
          </li>
          <li>
            <a
              href="https://www.fema.gov/disaster/wildfires"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              FEMA Wildfire Info
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
          <strong>Disclaimer:</strong> These guidelines are for informational purposes only. 
          Always follow local ordinances and seek professional advice for specific 
          home-hardening or landscaping projects.
        </p>
      </section>
    </main>
  );
};

export default PreventiveMeasures;
