import React from 'react';

const Pet = ({pet, onPetSelect}) => {
  return (
    <li onClick={() => onPetSelect(pet.media.photos.photo[0]["$t"], pet.description["$t"]) }>
      <div><img className="pet-list-image" src={pet.media.photos.photo[0]["$t"]} alt="pet-list-item" /></div>
      <div><p className="pet-list-info">{pet.contact.city["$t"]}</p></div>
    </li>
  )
}

export default Pet;
