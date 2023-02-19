


function getAnimalInfo(animalName){
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/animals?name=' + animalName,
    headers: { 'X-Api-Key': '3LsUYQWyPw+HXBwJ/+pmbw==nfBUKvQrB3Ifq5eT'},
    contentType: 'application/json',
    success: function(result) {
      console.log(result);
      var name = (result[0]['name']);
      var location = (result[0]['locations'][0]);
      var scientific = (result[0]['taxonomy']['scientific_name']);
      var population = (result[0]['characteristics']['estimated_population_size']);
      //var funFact = (result[0]['characteristics']['slogan']);
      var habitat = (result[0]['characteristics']['habitat']);
      var lifespan = (result[0]['characteristics']['lifespan']);
      var diet = (result[0]['characteristics']['diet']);
      var predators = (result[0]['characteristics']['predators']);
      //var list = [location, scientific, population, funFact, habitat, lifespan, diet, predators];
      let htmlStuff = (`<section class="animal-detail"> <h3>${name}</h3>
      <h2 class="divider">${scientific}</h2>
      
      <p class="animal_pop"> <b>Estimated Population:</b>
      ${population}
      </p>
      
      <p class="animal_habitat"> <b>Habitat:</b>
      ${habitat}
      </p>
      <p class="animal_lifespan"> <b>Lifespan:</b>
      ${lifespan}
      </p>
      <p class="animal_diet"> <b>Diet:</b>
      ${diet}
      </p>
      <p class="animal_predators"> <b>Predators:</b>
      ${predators}
      </p>
      <p class="animal_location"> <b>Location:</b>
      ${location}
      </p>
      </section>`);
      console.log (htmlStuff);
      const element = document.querySelector(".animalInfo");
      element.innerHTML = htmlStuff;

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
};
const zooAnimals = [
  'lion',
  'tiger',
  'elephant',
  'giraffe',
  'hippopotamus',
  'zebra',
  'cheetah',
  'rhinoceros',
  'monkey',
  'gorilla',
  'crocodile',
  'snake',
  'ostrich',
  'kangaroo',
  'koala',
  'panda',
  'penguin',
  'flamingo',
  'parrot',
  'peacock',
  'camel',
  'wolf',
  'fox',
  'hyena',
  'bear',
  'deer',
  'reindeer',
  'moose',
  'water buffalo',
  'bison',
  'elk',
  'llama',
  'alpaca',
  'goat',
  'sheep',
  'pig',
  'cow',
  'horse',
  'donkey',
  'chicken',
  'duck',
  'swan',
  'goose',
  'turkey',
  'emu',
];
const randomNum = Math.floor(Math.random() * 43);
const randomChoice = zooAnimals[randomNum];
getAnimalInfo(randomChoice);

/*
var form = document.querySelector("animalForm");
console.log(form);
let bacon = form.elements["animalName"].value;
console.log(bacon);
*/
/*
// Get the form element
const form = document.getElementById('animalForm');
/*
// Add 'submit' event handler
form.addEventListener('submit', (event) => {
  getAnimalInfo(form[0]);
});
*/
/*
document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  myCheckout.checkout();
});\*/
/*
const myForm = document.getElementById('animalForm');
const myInput = document.getElementById('animalName');

// Add an event listener to the form to handle submissions
myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value of the input field
  const name = myInput.value;

  // Display the results on the webpage
  console.log(name);
});
*/