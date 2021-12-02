import React from 'react';


class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      category: '',
      question: '',
      correct: '',
      incorrectAnswers: [],
      time: 30,
      isDisabled: false,
      assertions: 0,
      questionNumber: 0,
      isButtonVisible: false,
    };

    this.fetchApi = this.fetchApi.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.timer = this.timer.bind(this);
    this.score = this.score.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
    this.timer();
  }

  async fetchApi() {
    const token = await fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((tokenId) => tokenId.token);
    const { questionNumber } = this.state;
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    const correct = data.results[questionNumber].correct_answer;
    const incorrect = data.results[questionNumber].incorrect_answers;
    incorrect.push(correct);
    incorrect.sort();
    const { category, question, difficulty } = data.results[questionNumber];
    this.setState({
      category,
      question,
      correct,
      difficulty,
      incorrectAnswers: [...incorrect],
      renderGame: false,
    });
  }

  changeColor() {
    const wrongs = document.querySelectorAll('.wrong');
    const correct = document.querySelector('.correct');
    wrongs.forEach((element) => { element.style.border = '1px solid rgb(255, 0, 0)'; });
    correct.style.border = '2px solid rgb(6, 240, 15)';
    this.setState({ isButtonVisible: true });
  }

  timer() {
    const { time } = this.state;
    const mil = 1000;
    if (time !== 0) {
      setInterval(() => {
        this.setState((prevState) => {
          if (prevState.time > 0) {
            return ({ time: prevState.time - 1 });
          }
        });
      }, mil);
    }
  }

  score() {
    const { assertions } = this.state;
    const actAssertion = assertions + 1;
    this.setState({ assertions: actAssertion });
}

  next() {
    const { questionNumber, assertions } = this.state;
    const four = 4;
    if (questionNumber < four) {
      const actNumber = questionNumber + 1;
      this.setState({ questionNumber: actNumber,
        isButtonVisible: false,
        time: 30,
        renderGame: true });
      this.fetchApi();
    } else if (questionNumber === four) {
      return (alert(`Sua pontuação foi:${assertions}`));
    }
  }

  render() {
    const { incorrectAnswers, correct,
      question, category, time, isDisabled, isButtonVisible } = this.state;
      const innerHTML = (text) => ({
        __html: text,
      })
    return (
        (incorrectAnswers.length > 0) ? (
        <div>
          <section id="game">
            <h4 data-testid="question-category">{ category }: </h4>
            <h4 data-testid="question-text" dangerouslySetInnerHTML={innerHTML(question)}>
            </h4>
            {incorrectAnswers.map((alternative, index) => () => {
                if (alternative === correct) {
                     return (<button
                    type="button"
                    key={ correct }
                    disabled={ isDisabled }
                    id="correct-answer"
                    onClick={ () => {
                      this.changeColor();
                      this.score();
                    } }
                    className="correct"
                    dangerouslySetInnerHTML={innerHTML(correct)}
                  >
                  </button>)
                } else if (alternative !== correct) {
              return (<button
                type="button"
                key={ alternative }
                disabled={ isDisabled }
                data-testid={ `wrong-answer-${index}` }
                onClick={ this.changeColor }
                className="wrong"
                dangerouslySetInnerHTML={innerHTML(alternative)}
              >
              </button>)}})}
            { isButtonVisible
            && (
              <button data-testid="btn-next" type="button" onClick={ this.next }>
                Próxima
              </button>)}
            { time }
          </section>
        </div>
        ): <p id="load">Loading</p>
    );
  }
}

export default Game;