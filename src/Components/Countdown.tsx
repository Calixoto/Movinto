import { useContext } from 'react';
import { CountdownContext } from '../Contexts/CountdownContext';
import Style from '../Style/Components/Countdown.module.css';



export function Countdown() {
    const { minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



    return (
        <div>
            <div className={Style.CountdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={Style.CountDownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (<>{isActive ? (
                <button
                    type="button"
                    className={`${Style.CountDownButton} ${Style.CountDownButtonActive}`}
                    onClick={resetCountdown}
                >
                    Abandonar ciclo
                </button>
            ) : (
                    <button
                        type="button"
                        className={Style.CountDownButton}
                        onClick={startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                )
            }</>)}
        </div>
    );
}