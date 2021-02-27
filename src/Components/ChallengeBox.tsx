import { useContext } from 'react';
import { challengeContext } from '../Contexts/ChallengesContext';
import { CountdownContext } from '../Contexts/CountdownContext';
import Style from '../Style/Components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengeContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={Style.ChallengeBoxContainer}>
            {activeChallenge ? (
                <div className={Style.ChallengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={Style.ChallengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={Style.ChallengeSuccededButton}
                            onClick={handleChallengeSucceded}
                        >
                            Completei
                         </button>
                    </footer>
                </div>
            ) : (
                    <div className={Style.ChallengeNotActive}>
                        <strong>Inicie um cilco para receber desafios a serem completados</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )}
        </div>
    );
}