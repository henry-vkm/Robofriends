import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map(robot => {
          return (
            <Card key={robot.id} robot={robot}/>
          )
        })
      } 
    </div>
  )
}

export default CardList;