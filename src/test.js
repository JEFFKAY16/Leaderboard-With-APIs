import './styles.css'

const container = document.querySelector('.score-list');

const listItems = [
  {
    id: 1,
    name: "Jeff",
    score: 21
  },
  {
    id: 2,
    name: "Jessica",
    score: 18
  },
  {
    id: 3,
    name: "Jesse",
    score: 15
  },
  {
    id: 4,
    name: "Maria",
    score: 12
  },
  {
    id: 5,
    name: "Joel",
    score: 9
  },
];

listItems.forEach((list) => {
  const line = `
  <li class="items">${list.name} : ${list.score}</li>
  `
  container.innerHTML += line;
});

const items = document.querySelectorAll('.items');

items.forEach((item) => {
  if (item.id % 2 === 0) {
  item.classList.add('grey-color');
}
})
