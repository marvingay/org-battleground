import React from 'react';
import { IQuestionObject } from '../types';
// Components
import TriviaAnswer from './TriviaAnswer';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  question: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    fontSize: '1.05rem',
    textAlign: 'center',

  }
}))

const GameDisplay: React.FC<IQuestionObject> = ({ question, answers, correctAnswer, callback, userAnswer, questionNumber, total }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.caption} paragraph variant='caption'><strong>Question</strong>:  {questionNumber} / {total}</Typography>
      <p className={classes.question} dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <TriviaAnswer answer={answer} callback={callback} correctAnswer={correctAnswer} key={answer} userAnswer={!!userAnswer} />
        ))}
      </div>
    </div>
  )
}



export default GameDisplay;