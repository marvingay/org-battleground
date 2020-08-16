import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { nextQuestion, fetchTriviaQuestions } from '../utilities/triviaHelper';
import GameDisplay from './GameDisplay';
import { AnswerObject, Difficulty, QuestionState } from '../types';


const Game: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions)


  const startTrivia = async () => {
    try {

      setLoading(true);
      setGameOver(false);

      const newQuestions = await fetchTriviaQuestions(
        50,
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

  return (
    <div>
      <div>
        <Typography variant='h2'>Trivia Rush</Typography>
        {gameOver || userAnswers.length === 50 ? (
          <Button onClick={startTrivia}>Start</Button>
        )
          : null}
        {!gameOver ? (<p>Score: </p>) : null}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <GameDisplay
            questionNumber={number + 1}
            question={questions[number].question}
            answers={questions[number].answer}
            userAnswer={userAnswers ? userAnswers[number] : null}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== 49 && (

          <Button onClick={nextQuestion}>Next Question</Button>
        )}
      </div>
    </div>
  )
}

export default Game;