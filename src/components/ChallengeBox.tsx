import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeIsNotActive}>
        <strong> Termine um ciclo para receber desafios e ganhar experiência</strong>
        <p>
          <img src='icons/level-up.svg' alt='Level Up'/>
          Avance de level completando desafios
        </p>
      </div>
    </div>
  )
}