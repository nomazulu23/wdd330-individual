const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
    }
    
    // Function to display the prophet cards
    const displayProphets = (prophets) => {

const prophetCardTemplate = document.querySelector('#prophet-card');
const prophetCard = prophetCardTemplate.content.cloneNode(true);

prophets.forEach((prophet)=> {
prophetCard.querySelector('.full-name').textContent = prophet.full_name;
prophetCard.querySelector('.birth-date').textContent = prophet.birth_date;
prophetCard.querySelector('.birth-place').textContent = prophet.birth_place;
prophetCard.querySelector('.profile').src = prophet.profile_image_url;
});
}