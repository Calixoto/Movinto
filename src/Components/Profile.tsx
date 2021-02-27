import { useContext } from 'react';
import { challengeContext } from '../Contexts/ChallengesContext';
import Style from '../Style/Components/Profile.module.css';
export function Profile() {
    const { level } = useContext(challengeContext);

    return (
        <div className={Style.profileContainer}>
            <img src="https://github.com/Calixoto.png" alt="Lucas Calixto" />
            <div>
                <strong>Lucas Calixto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}