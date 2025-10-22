import React from 'react'; 









const tips = [
  "Keep pets warm with cozy blankets and sweaters.",
  "Ensure fresh water doesn't freeze during winter.",
  "Limit outdoor exposure during cold and windy days.",
  "Provide a balanced diet to maintain energy levels.",
  "Check paws for ice or salt after walks.",
  "Groom pets regularly to prevent matting in thick fur.",
  "Monitor pets for signs of hypothermia or frostbite.",
];

const Tips = () => { 

    
    return (
        <div>
 <section className="bg-blue-50 p-6 my-10 rounded-md text-center">
  <h2 className="text-3xl font-bold mb-4">Winter Care Tips for Pets</h2>
  <ul className="inline-block text-left list-disc space-y-2">
    {tips.map((tip, index) => (
      <li key={index} className="text-gray-700 font-light">
        {tip}
      </li>
    ))}
  </ul>
</section>

        </div>
    );
};

export default Tips;