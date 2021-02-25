import { useContext } from 'react';
import { ChallengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function Experiencebar(){

  const { currentXp, xpToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.round((currentXp*100) / xpToNextLevel);

  return(
    <header className = {styles.experienceBar} >
      <span> 0 xp </span>
        <div>
          <div style={{ width: `${percentToNextLevel}%`}}/>

            <span className = {styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
              {currentXp} xp
            </span>
        </div>
      <span> {xpToNextLevel} xp</span>
    </header>
  );
}