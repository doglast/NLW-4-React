import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { CountdownContext } from '../context/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive,
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext)   

  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRigth] = String(seconds ).padStart(2, '0').split('');

  

  return (
    <div>
      {/* Timer */}
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>

      { hasFinished ? (
          <button
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado
          </button>
        ): (
          <>
            { isActive ? (
                <button
                    type='button' 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                >
                  Yo no puedo Codar mais manito
                </button>
              ) : 
              (
                <button
                  type='button' 
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Hora de codar
                </button>
              )
            }
          </>
        )
      }
    </div>
  );
}