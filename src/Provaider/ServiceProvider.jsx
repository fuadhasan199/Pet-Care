
import React, { createContext, useState, useEffect } from 'react';

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

 
  useEffect(() => {
    fetch('/Data.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  
  const addService = (service) => {
    const exists = selectedServices.find(s => s.serviceId === service.serviceId);
    if (!exists) setSelectedServices([...selectedServices, service]);
  };

  return (
    <ServiceContext.Provider value={{ services, selectedServices, addService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
