import React, { useState, useEffect} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroCards = ({ heroes }) => {
  
  const handleHeroSelect = () => {
        const practiceRangeElement = document.getElementById('practiceRange');
            practiceRangeElement.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div id="hero-cards-container">
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {heroes.map((hero) => (
          <Col key={hero.name}>
            <Card
              className="position-relative border border-warning"
              style={{ width: '160px', cursor: 'pointer' }}
              onClick={handleHeroSelect} // Pass handleHeroSelect function to onClick event
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
  );
};

export default HeroCards;
