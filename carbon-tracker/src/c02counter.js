import React, { useState } from 'react';

function Counter({ incrementAmount }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + incrementAmount);
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment by {incrementAmount}</button>
        </div>
    );
}

export default Counter;