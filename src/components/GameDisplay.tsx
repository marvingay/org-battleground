import React from 'react';
import { IQuestionObject } from '../types';

const GameDisplay: React.FC<IQuestionObject> = ({ question, answers, callback, userAnswer, questionNumber }) =>

  (
    <div>
      <p>Question:  {questionNumber}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={userAnswer} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )



export default GameDisplay;