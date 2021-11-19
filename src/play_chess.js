export default class PlayChess {
  constructor() {
    this.gameKey = '8b1WjNYLhiocCWi4SZXe';
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  }

  fetchScores = async () => {
    const response = await (await fetch(`${this.baseUrl}games/${this.gameKey}/scores/`)).json();
    return response;
  };

  displayScores() {
    const scoreList = document.querySelector('.score-list');
    this.fetchScores().then((res) => {
      if (res.result && typeof res.result === 'object') {
        const scores = res.result;
        if (scores.length > 0) {
          scoreList.innerHTML = '';
          scores.forEach((score) => {
            scoreList.innerHTML += `<li class="items">${score.user} : ${score.score}</li>`;
          });
        } else {
          scoreList.innerHTML = 'Oops! This scoreboard looks empty. How about you begin by adding something?';
        }
      }
    });
  }

  addScore = async (user, score) => {
    let response = 'error';
    if (user && score) {
      response = await (await fetch(`${this.baseUrl}games/${this.gameKey}/scores`, {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })).json();
    }
    return response;
  }
}