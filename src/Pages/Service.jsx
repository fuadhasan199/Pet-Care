import React, { useContext } from 'react';
import { ServiceContext } from '../Provaider/ServiceProvider';

const Service = () => {
  const { selectedServices } = useContext(ServiceContext);

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
            <div className="flex justify-between m-2">
              <p className="font-bold text-green-500">Rating: {service.rating}</p>
              <p className="font-bold text-green-600">Price: {service.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
