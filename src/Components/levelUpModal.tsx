import { useContext } from 'react';
import { challengeContext } from '../Contexts/ChallengesContext';
import Style from '../Style/Components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(challengeContext);

    return (
        <div className={Style.overlay}>
            <div className={Style.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="fechar modal" />
                </button>
            </div>
        </div>
    );
}