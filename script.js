const button = document.getElementById('getjoke'); // sélectionne l'élément HTML qui a l'ID getjoke
const jokeContent = document.getElementById('jokeContent'); // selectione la blague la ou elle sera affichee 

button.addEventListener('click', () => {             // ajoute un écouteur D'événements au click 
  fetch('https://mini-app-carambar-and-co.onrender.com/v1/blagues/random')   // (api de la route random qui est choisi ) et au debut c'estait la route local qu'elle envoie à L'URL 'http://localhost:3000/blagues/random' sans le versionning car je l'avais oublier de la mettre 
  
    .then(response => response.json()) // converti le reponse en json
    .then(data => {                   
      jokeContent.textContent = data.content; // data.content contient la ou ya la blague
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de la blague:', error);   // affiche l'erreur dans la console si ya erreur 
      jokeContent.textContent = 'Erreur lors de la récupération de la blague';
    });
});

