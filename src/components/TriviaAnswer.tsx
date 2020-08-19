import React from 'react';

// Styles
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  correctAnswer: string;
  userAnswer: boolean;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  answer: string;
}

const useStyles = makeStyles((theme) => ({
  answer: {
    fontSize: '1.25rem',
    margin: 'auto'
  },
  btn: {
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '0.8rem',
    width: '100%',
    height: '40px',
    margin: '5px 0',
    border: '3px solid #000',
    boxShadow: '1px 2px 0px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    color: '#fff',
    textShadow: '0px 1px 0px rgba(0,0,0,0.25)',
    '&:hover': {
      opacity: '0.8'
    }
  }
}))

const TriviaAnswer: React.FC<Props> = ({ answer, correctAnswer, callback, userAnswer }) => {
  const classes = useStyles();

  return (
    <button className={classes.btn} disabled={!!userAnswer} onClick={callback} style={{
      background: userAnswer && answer === correctAnswer
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : userAnswer && answer !== correctAnswer
          ? 'linear-gradient(90deg, #ff5656, #c16868)'
          : 'linear-gradient(90deg, #56ccff, #6eafb4'
    }} value={answer}>
      <p className={classes.answer} dangerouslySetInnerHTML={{ __html: answer }} />
    </button>
  )
}

export default TriviaAnswer;