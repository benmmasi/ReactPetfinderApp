import React from 'react';
import Pet from './Pet';

const PetList = (props) => {
  if(props) {
      const petListItems = props.pets.map(pet => {
        return (
          <Pet
          onPetSelect={props.onPetSelect}
          key={pet.id["$t"]}
          pet={pet} />
        )
      })

    return (
      <ul className="PetList">
        {petListItems}
      </ul>
    );
  }
}

export default PetList;
