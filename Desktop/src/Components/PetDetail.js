import React from 'react';

const PetDetail = ({ petImage, petDesc }) => {
if(!petImage)
  return <p>Select a Pet</p>
    return(
      <li>
        <div className="pet-detail-block">
          <div><img className="pet-list-image" src={petImage} alt="pet-list-item" /></div>
          <div><p className="pet-detail-desc">{petDesc} </p></div>
        </div>
      </li>
    )
  }

export default PetDetail;
