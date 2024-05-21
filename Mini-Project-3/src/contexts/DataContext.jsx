import React from 'react';
 
const dataContext = React.createContext();

function dataContextProvider(props) {
    const heroData = fetch('https://overfast-api.tekrop.fr/heroes')
          .then((response) => response.json())
          .then((data) => setHeroes(data))
          .catch((error) => console.error('Error fetching heroes:', error));
    
   
    return (
      <dataContext.Provider value={heroData}>
        {props.children}
      </dataContext.Provider>
    );
  }