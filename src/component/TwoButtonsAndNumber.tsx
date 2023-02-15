type TwoButtonsAndNumberProps = {
    currentNumber: number,
    increaseCurrentNumber: () => void,
    decreaseCurrentNumber: () => void
}

export default function TwoButtonsAndNumber(props: TwoButtonsAndNumberProps) {
    return (
        <>
            <button onClick={props.decreaseCurrentNumber}>-</button> {props.currentNumber} <button onClick={props.increaseCurrentNumber}>+</button>
        </>
    );
}