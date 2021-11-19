import './styles.css';
import PlayChess from './play_chess';

const game = new PlayChess();
game.displayScores();
document.querySelector('#refresh').addEventListener('click', () => game.displayScores());

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = form.elements.user.value;
  const score = form.elements.score.value;
  game.addScore(user, score).then((res) => console.log(res));
  form.reset();
})
