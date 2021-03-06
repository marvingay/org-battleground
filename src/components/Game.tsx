import React, { useState } from 'react';
import { fetchTriviaQuestions } from '../utilities/triviaHelper';
import { AnswerObject, Difficulty, QuestionState } from '../types';
// Components
import GameDisplay from './GameDisplay';
// Styles
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const TOTAL = 20;
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    marginTop: '20px'
  },
  startNext: {
    cursor: 'pointer',
    background: 'linear-gradient(180deg, #fff, #ffcc91)',
    border: '2px solid #d38558',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    height: '40px',
    margin: '20px 0',
    padding: '0 40px',
  },
  score: {
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 'bold'

  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
}))

const Game: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const classes = useStyles();




  const startTrivia = async () => {
    try {

      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchTriviaQuestions(
        TOTAL,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    }
    catch (error) { console.log(error) }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  };

  return (
    <Container className={classes.container}>

      <div >
        <Typography className={classes.title} variant='h2'>Trivia Rush</Typography>
        {gameOver || userAnswers.length === 50 ? (
          <Grid container justify='center'>
            <Button className={classes.startNext} onClick={startTrivia}>Start</Button>
          </Grid>
        )
          : null}
        {!gameOver ? (<Typography className={classes.score} paragraph variant='h3'>Score: <span style={{ color: '#d32f2f' }}>{score}</span></Typography>) : null}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <GameDisplay
            questionNumber={number + 1}
            question={questions[number].question}
            total={TOTAL}
            answers={questions[number].answer}
            correctAnswer={questions[number].correct_answer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== 49 && (

          <Grid container justify='center'>
            <Button className={classes.startNext} onClick={nextQuestion}>Next Question</Button>
          </Grid>
        )}
      </div>
    </Container>
  )
}

export default Game;