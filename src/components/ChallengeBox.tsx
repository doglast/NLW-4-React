import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import { CountdownContext } from '../context/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completedChallenges } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceded(){
    completedChallenges();
    resetCountdown(); 
  }

  function handleChallengeFailed(){
    resetCountdown();
  }

  return (
      <div className={styles.challengeBoxContainer}>
          { activeChallenge ? (
            <div className={styles.challengeActive}>
              <header>Ganhe {activeChallenge.amount} xp</header>

              <main>
                <img src={`icons/${activeChallenge.type}.svg`}/>
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
              </main>

              <footer>
                <button 
                  type='button'
                  className={styles.challengeFailButton}
                  onClick={handleChallengeFailed}
                >
                  Falhei
                </button>

                <button 
                  type='button'
                  className={styles.challengeSucceedButton}
                  onClick={handleChallengeSucceded}
                >
                  Completei
                </button>
                
              </footer>
            </div>
      ) : (
        <div className={styles.challengeIsNotActive}>
          <strong> Termine um ciclo para receber desafios e ganhar experiência</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up'/>
            Avance de level completando desafios
          </p>
        </div>      
      ) }
      </div>       
  )
}