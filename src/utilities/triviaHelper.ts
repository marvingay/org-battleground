import { Difficulty, Question } from '../types';
import axios from 'axios';
import { answerRNG } from './utils';

export const fetchTriviaQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  try {
    const { data } = await axios.get(endpoint);
    return data.results.map((question: Question) => ({
      ...question,
      answer: answerRNG([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {
    console.log(error);
  }
};
