import React, { useContext } from 'react';
import { ServiceContext } from '../Provaider/ServiceProvider';
import toast, { Toaster } from 'react-hot-toast';

const Service = () => {
  const { selectedServices,removeService } = useContext(ServiceContext); 
  const handleBooking=(id)=>{
    toast.success("Booking Done 😊") 
    removeService(id)
  }
   
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Our Selected Services</h2>

      {selectedServices.length === 0 && (
        <p className="text-center text-gray-500">No services added yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {selectedServices.map(service => (
          <div key={service.serviceId} className="bg-gray-200 rounded-md shadow-md p-4">
            <img src={service.image} alt={service.serviceName} className="w-full h-40 object-cover rounded-md" />
            <p className="font-light mt-2">{service.serviceName}</p>
             <div className="">
                    <fieldset className="fieldset mt-2 bg-base-200 border-base-300 rounded-box w-xs border p-4">
            

  <label className="label">Name</label>
  <input type="email" className="input" placeholder="Your Name" />

  <label className="label">Email</label>
  <input type="password" className="input" placeholder="Your Email" />

  <button className="btn btn-neutral mt-4" onClick={()=>handleBooking(service.serviceId)}>Book Now</button>
</fieldset>
             </div>
          </div>
        ))}
      </div> 
     <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Service;
