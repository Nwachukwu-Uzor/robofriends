import React from 'react';
import Card from './components/Card';

const CardList = ({ robots })  => {
   return (
      <div>
         { robots.map(robot => 
            <Card 
               key={robot.id} 
               id={robot.id} 
               name={robot.name} 
               username={robot.username} 
               email={robot.email} 
               address={robot.address.street}
               website={`www.${robot.website}`}
            />
         )}
      </div>
   )
}

export default CardList;