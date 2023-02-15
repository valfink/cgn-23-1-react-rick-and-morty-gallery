import React, {BaseSyntheticEvent} from "react";

type TwoButtonsAndNumberProps = {
    currentNumber: number,
    increaseCurrentNumber: () => void,
    decreaseCurrentNumber: () => void
}

export default function TwoButtonsAndNumber(props: TwoButtonsAndNumberProps) {
    function handleButtonClick(e: BaseSyntheticEvent) {
        console.log(e);
        console.log(e.target.dataset);
        if (e.target.dataset.action === "-") {
            props.decreaseCurrentNumber();
        } else {
            props.increaseCurrentNumber();
        }
    }
    return (
        <>
            <button data-action={"-"} onClick={handleButtonClick}>-</button> {props.currentNumber} <button data-action={"+"} onClick={handleButtonClick}>+</button>
        </>
    );
}