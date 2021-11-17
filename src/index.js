import './styles.css';

const container = document.querySelector('.score-list');

const listItems = [
  {
    name: 'Jeff',
    score: 21,
  },
  {
    name: 'Jessica',
    score: 18,
  },
  {
    name: 'Jesse',
    score: 15,
  },
  {
    name: 'Maria',
    score: 12,
  },
  {
    name: 'Joel',
    score: 9,
  },
  {
    name: 'Jade',
    score: 2,
  }
];

let foo = 0;

listItems.forEach((list) => {
  if (foo <= 0) {
    container.innerHTML += `<li class="items">${list.name} : ${list.score}</li>`;
    foo += 1;
  }else {
    container.innerHTML += `<li class="items grey-color">${list.name} : ${list.score}</li>`;
    foo = 0;
  }
});
