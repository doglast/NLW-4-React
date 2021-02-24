import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>1</span>
        <span>3</span>
      </div>
      <span>:</span>
      <div>
        <span>4</span>
        <span>9</span>
      </div>

    </div>
  );
}