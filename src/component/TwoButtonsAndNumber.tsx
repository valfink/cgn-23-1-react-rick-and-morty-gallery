type ButtonAndNumberProps = {
    currentNumber: number,
    increaseCurrentNumber: () => void,
    decreaseCurrentNumber: () => void
}

export default function TwoButtonsAndNumber(props: ButtonAndNumberProps) {
    return (
        <>
            <button onClick={props.decreaseCurrentNumber}>-</button> {props.currentNumber} <button onClick={props.increaseCurrentNumber}>+</button>
        </>
    );
}