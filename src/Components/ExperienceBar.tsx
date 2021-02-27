import { useContext } from 'react';
import { challengeContext } from '../Contexts/ChallengesContext';
import Style from '../Style/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(challengeContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={Style.experienceBar} >
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={Style.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience}
                </span>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}