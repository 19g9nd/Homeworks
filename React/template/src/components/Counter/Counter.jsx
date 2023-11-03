import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    function setOnlyNaturalNumberState(newValue) {
        if (Number.isInteger(newValue) && newValue >= 0) {
            setStep(newValue);
        } else {
            alert("Значение должно быть натуральным числом.");
        }
    }

    const cText = 'Count is: ';
    const sText = 'Step is: ';
    return (
        <>
            <div>
                <button onClick={() => {
                    setCount(count - step);
                }}>-</button>

                {cText} {count}
                <button onClick={() => {
                    setCount(count + step);
                }}>+</button>
            </div>
                <div>

                    <button onClick={() => {
                        setOnlyNaturalNumberState(step - 1);
                    }}>-</button>
                    {sText} {step}
                    <button onClick={() => {
                        setOnlyNaturalNumberState(step + 1);
                    }}>+</button>

                </div>
        </>
    )
}

export default Counter;