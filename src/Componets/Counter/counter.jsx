import { useState } from "react";
import "./counter.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [countInput, setCountInput] = useState(1);

    const onClickAddBtn = () => {
        setCount(count + countInput)
    }
    const onClickSubBtn = () => {
        setCount(count - countInput)
    }
    return (
        <div>
            <h1 data-testid="header">It's a Counter.</h1>
            <h1 data-testid="count"
                className={`${count >= 100 ? "green" : ""}${count <= -100 ? "red" : ""}`}>{count}</h1>
            <div>
                <button data-testid="sub-btn"
                    onClick={onClickSubBtn}>
                    -
                </button>
                <input
                    className="text-center"
                    data-testid="count-input"
                    type="number"
                    value={countInput}
                    onChange={e => {
                        setCountInput(parseInt(e.target.value))
                    }}
                />
                <button data-testid="add-btn"
                    onClick={onClickAddBtn}>
                    +
                </button>
            </div>
        </div>
    )
};
