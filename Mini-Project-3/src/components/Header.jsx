import { Card } from 'react-bootstrap';
import { Button, Stack } from 'react-bootstrap';
import LoginForm from './loginForm';
import HeroCards from './heroCards';
import { useEffect, useState } from "react";
import { UserProvider } from '../contexts/UserContext';


function Header() {

    return (
        <Stack direction="horizontal" gap={3}>
                <Card className= "h1 border border-warning shadow p-3 mb-5 bg-primary bg-gradient"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    // fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                Welcome to your Overwatch Favorites&nbsp;Profile!
                <h3>Select or remove heroes below from your Favorites list.
                Favorites will be designated with a <span className="border border-danger border-5">red outline.</span>
                </h3>
              
                </Card>           
        
</Stack>           
                
      );
    }

export default Header;