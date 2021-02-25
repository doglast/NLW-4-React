import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completedChallenges: () => void;


}

export const ChallengeContext = createContext({} as ChallengeContextData);

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps ){
  const [level, setLevel] = useState(1);
  const [currentXp, setCurrentXp] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const xpToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp(){
    setLevel(level+1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play

    if (Notification.permission === 'granted') {
      new Notification(' 🔥 Novo desavio 🔥 ', {
        body: `Valendo ${challenge.amount } xp!`
      })
    }
  }

  function resetChallenge(){
    setActiveChallenge(null); 
  }

  function completedChallenges(){
    if(!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalXp = currentXp + amount;

    if (finalXp >= xpToNextLevel){
      finalXp = finalXp - xpToNextLevel;
      levelUp();
    }

    setCurrentXp(finalXp);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted+1);
  }

  return(
    <ChallengeContext.Provider 
      value={{ 
        level, 
        currentXp, 
        xpToNextLevel,
        challengesCompleted, 
        levelUp,
        startNewChallenge, 
        activeChallenge,
        resetChallenge,
        completedChallenges,
      }} 
    >
      {children}
    </ChallengeContext.Provider>
  );
}

