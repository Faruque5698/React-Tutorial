import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(5);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }
    return (
        <div className="text-center">
            <h1 className="bg-dark text-white">Count:{counter}</h1>
            <button onClick={increase} className="btn btn-primary m-2 p-2">Increase</button>
            <button onClick={decrease} className="btn btn-success m-2 p-2">Decrease</button>
        </div>
    )
}
export default Counter;