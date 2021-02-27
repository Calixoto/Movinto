import { useContext } from 'react';
import { challengeContext } from '../Contexts/ChallengesContext';
import Style from '../Style/Components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(challengeContext);

    return (
        <div className={Style.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}