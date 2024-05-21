import React, { useState, useEffect} from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const HeroCards = ({ heroes }) => {
  
const [selectedHeroes, setSelectedHeroes] = useState("");

const handleHeroSelect = (heroName) => {
  setSelectedHeroes((prevSelected) =>
    prevSelected.includes(heroName)
      ? prevSelected.filter((name) => name !== heroName)
      : [...prevSelected, heroName]
  );
};

const handleSaveButton = async () => {
  try {
    const response = await axios.put(`http://127.0.0.1:27017/MiniProject3/users/66469863ee8c741235136638`, {
      favorites: selectedHeroes,
    });
    console.log('Favorites saved!', response.data);
  } catch (error) {
    console.error('Save Error!', error);
  }
};

  return (
<>
<Button className="d-flex mb-4" onClick={handleSaveButton}>
        Save Your Selections
      </Button>
                

    <div id="hero-cards-container">
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name}>
            <Card
              className={`position-relative border ${
                selectedHeroes.includes(hero.name) ? 'border-danger border-5 bg-gradient' : 'border-warning'
              }`}
              style={{ width: '160px', cursor: 'pointer' }}
              onClick={() => handleHeroSelect(hero.name)}
            >
              <Card.Img
                className="hover-zoom bg-dark"
                src={hero.portrait}
                alt={hero.name}
                style={{ height: '120px', objectFit: 'cover' }}
              />
              <Card.Body className="border border-warning bg-warning-subtle bg-gradient text-dark">
        <Card.Title className="text-uppercase fw-bold fs-10 mb-0 text-dark" style={{ fontStyle: 'italic' }}>
                    {hero.name}</Card.Title>
                    <Card.Text className="fw-bold fs-6">
                    Role: {hero.role.toUpperCase()}
                  </Card.Text>
        </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </div>
    </>
  );
};

export default HeroCards;
