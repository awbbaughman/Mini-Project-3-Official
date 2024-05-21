import React, { useState, useEffect, useRef } from 'react';
import { UserProvider } from './contexts/UserContext';
import HeroCards from './components/heroCards';
import Header from './components/Header'
import { Card, Col, Row, Button, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/loginForm';

// Reminder: these selectedHero properties and handlers interact directly with Abilities component!
const App = () => {
  const [heroes, handleHeroSelect] = useState([]); 

  useEffect(() => {
      fetch('https://overfast-api.tekrop.fr/heroes')
        .then((response) => response.json())
        .then((data) => handleHeroSelect(data))
        .catch((error) => console.error('Error fetching heroes:', error));
    }, []);

    return (
      <>
<UserProvider>
  <LoginForm />
</UserProvider>

  <Header id="Header" />
  <br />
    <HeroCards heroes={heroes} onHeroSelect={handleHeroSelect} />
    <Button className="p-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</Button>
      </>
    );
};

export default App;