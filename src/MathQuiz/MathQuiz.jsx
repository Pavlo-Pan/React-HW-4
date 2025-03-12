import { useState, useEffect } from 'react';
import Answer from './Answer/Answer';
import styles from './MathQuiz.module.css';

const getRandomNumber = () => Math.floor(Math.random() * 11);

const MathQuiz = () => {
  const [points, setPoints] = useState(0);
  const [numbers, setNumbers] = useState({ a: getRandomNumber(), b: getRandomNumber() });

  const updatePoints = (correct) => {
    setPoints(prev => Math.max(0, prev + (correct ? 1 : -1)));
    setNumbers({ a: getRandomNumber(), b: getRandomNumber() });
  };

  useEffect(() => {
    if (points > 0 && points % 10 === 0) {
      alert(`Вы решили правильно ${points} задач!`);
    }
  }, [points]);

  return (
    <div className={styles.container}>
      <p>Ваши очки: {points}</p>
      <p>{numbers.a} + {numbers.b} = ?</p>
      <Answer updatePoints={updatePoints} a={numbers.a} b={numbers.b} />
    </div>
  );
};

export default MathQuiz;
