import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import doc1 from '../doc 1.jpg';
import doc2 from '../Doc2.jpg';
import doc3 from '../Doc3.jpg';
import Tips from '../Tips';
import HeroSwiper from '../HeroSwiper';
import { ServiceContext } from '../Provaider/ServiceProvider';

const Home = () => {
  const cards = useLoaderData();
  const { addService } = useContext(ServiceContext);

  return (
    <div className='container mx-auto'>
      <div className="mt-12">
        <h2 className='text-3xl font-bold text-center mb-4'>Welcome to Winter Pet Care!</h2>
        <p className='text-center text-gray-600 mb-6'>Keep your pets cozy and healthy this winter with our expert services.</p>
        <HeroSwiper />
      </div>

      <h2 className='mt-6 text-center font-bold text-5xl'>OUR SERVICES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 cursor-pointer">
        {cards.map(card => (
          <div key={card.serviceId}  onClick={()=>addService(card)}
            className="bg-gray-200 rounded-md shadow-md p-4 hover:scale-105 transition-transform duration-200" >
         
            <img src={card.image} alt={card.serviceName} className="w-full h-40 object-cover rounded-md" />
            <p className="font-light mt-2">{card.serviceName}</p>
            <div className="flex justify-between m-2">
              <p className="font-bold text-green-500">Rating: {card.rating}</p>
              <p className="font-bold text-green-600">Price: {card.price}$</p>
            </div>
            <button className="btn flex mx-auto mt-2">Details</button>
          </div>
        ))}
        <Tips />
      </div>

      <h2 className='text-5xl md:text-6xl font-bold text-white bg-black px-1 py-5 text-center inline-block ml-[280px]'>Meet Our Expert Vets</h2>

      <div className="flex flex-wrap gap-3 mt-10">
        {[doc1, doc2, doc3].map((doc, idx) => (
          <div key={idx} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={doc} alt="" className='w-[250px] h-[200px] rounded-md m-3' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Doctor Name: {idx === 0 ? 'Jackshon' : idx === 1 ? 'Gerard Butler' : 'Tom Cruise'}</h2>
              <p>{idx === 0
                  ? "Dr. Jackshon is skilled in general pet health and diagnostics. He specializes in vaccinations, surgeries, and emergency care, offering compassionate and attentive treatment for every animal."
                  : idx === 1
                  ? "Dr. Gerard Butler focuses on both small and large pets. She assists with disease prevention, nutrition, and behavioral issues, creating a calm and caring environment for every pet."
                  : "Dr. Tom Cruise excels in complex illnesses and surgical cases. He provides expert diagnostics, pre-op care, and rehabilitation, prioritizing the well-being and comfort of every animal."
                }
              </p>
              <div className="card-actions justify-end">
                <div className="btn">Appoientment</div>
                <div className="btn">Contacts</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
