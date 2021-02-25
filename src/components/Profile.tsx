import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

  const { level } = useContext(ChallengeContext);

  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/doglast.png' alt='Douglas Evangelista dos Santos'/>
      <div>
        <strong>Douglas Evangelista</strong>
        <p>
          <img src='icons/level.svg' alt='level up'/>
          Level {level}
        </p>
      </div>
    </div>
  )
}