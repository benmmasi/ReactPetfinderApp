import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PetList from './Components/PetList';
import PetDetail from './Components/PetDetail';
import './style/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pets: [],
      selectedPetImage: null,
      selectedPetDescription: null
    }
  }

searchPets(event) {
  let meth = 'pet.find'
  let petKey = '4208d4fd1a4c1b7bd5d918dfde8866b4'
  event.preventDefault()
  let location = event.target.location.value
  let animal = event.target.animal.value
  let breed = event.target.breed.value
  let format = 'json'
  let api = 'http://api.petfinder.com/' + meth + '?key=' + petKey + '&location=' + location
  + '&animal=' + animal + '&format=' + format + "&count=15"

  axios
    .get(api)
    .then(res => {
      let pets = res.data.petfinder.pets["pet"]
      this.setState({
        pets: pets,
        //selectedPet: pets[0]
       })

    })
    .catch(err => console.log(err))
}



  render() {
     return (
      <div className="App">
        <div className="App-header">
          <form onSubmit={ this.searchPets.bind(this) }>
            <label>Location:</label>
            <input type="text" name="location" />
            <label>Animal:</label>
            <input type="text" name="animal" />
            <label>Breed:</label>
            <input type="text" name="breed" />
            <input type="submit" value="Submit" />
          </form>
          <PetDetail
          petImage={this.state.selectedPetImage}
          petDesc={this.state.selectedPetDescription} />
          <PetList
          pets={this.state.pets}
          onPetSelect={(selectedPetImage, selectedPetDescription) => this.setState({
            selectedPetImage: selectedPetImage,
            selectedPetDescription: selectedPetDescription })} />
        </div>
      </div>
    );
  }
}

export default App;
