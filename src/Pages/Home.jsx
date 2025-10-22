import React from 'react';
import { useLoaderData } from 'react-router';
import doc1 from '../doc 1.jpg' 
import doc2 from '../Doc2.jpg'
import doc3 from '../Doc3.jpg'
import Tips from '../Tips';
const Home = () => { 

  const cards=useLoaderData() 
  console.log(cards)





    return (
        <div className=' container mx-auto '>
            
          <div className='flex flex-cols-1 flex-wrap md:flex-cols-3 gap-5 mt-5  '> 
      { 
      
         cards.map(card=>( 
            <div className='bg-gray-200 shadow-md m-3 p-4' > 

          <img src={card.image} alt="" className='w-[250px] h-[150px] rounded-md'/> 

          <p className='font-light mt-2' >{card.serviceName}</p> 
          <div className="flex justify-between m-2">

            <p className='font-bold text-green-500'>Rating:{card.rating}</p> 
            
            <p className='font-bold text-green-600'>Price: {card.price}$</p>
          </div> 
          <button className='btn flex mx-auto mt-2'>View Details</button>


  
            </div>
         )
         


         )
     

      }  

       <Tips></Tips>
        </div> 

         <h2 className='text-center text-5xl mt-7 font-bold'>Meet Our Expert Vets</h2> 

           <div className="flex flex-wrap gap-3 mt-10">

        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
     <img src={doc1} alt=""  className='w-[250px] h-[200px] rounded-md m-3' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      
      Doctor Name : Jackshon
      
    </h2>
    <p>Dr. Jackshon is skilled in general pet health and diagnostics. He specializes in vaccinations, surgeries, and emergency care, offering compassionate and attentive treatment for every animal.</p>
    <div className="card-actions justify-end">
      <div className="btn">Appoientment</div>
      <div className="btn">Contacts</div>
    </div>
  </div>
</div>  


  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
   <img src={doc2} alt=""  className='w-[250px] h-[200px] rounded-md m-3' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Doctor Name : Gerard Butler
    </h2>
    <p>Dr. Gerard Butler focuses on both small and large pets. She assists with disease prevention, nutrition, and behavioral issues, creating a calm and caring environment for every pet.</p>
    <div className="card-actions justify-end">
      <div className="btn ">Appoientment</div>
      <div className="btn ">Contacts</div>
    </div>
  </div>
</div>  

 

 <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img src={doc3} alt="" className='w-[250px] h-[200px] rounded-md m-3' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Doctor Name : Tom Cruise
    </h2>
    <p>Dr. Tom Cruise excels in complex illnesses and surgical cases. He provides expert diagnostics, pre-op care, and rehabilitation, prioritizing the well-being and comfort of every animal.</p>
    <div className="card-actions justify-end">
      <div className="btn">Appoientment</div>
      <div className="btn">Contacts</div>
    </div>
  </div>
</div>
             









           </div>

        </div>
    );
};

export default Home;