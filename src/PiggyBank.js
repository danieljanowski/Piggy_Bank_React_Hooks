import React, { useState, useCallback } from 'react'; //UPDATED

export default function PiggyBank({title}){

    const [total, setTotal] = useState(0)

    const deposit = (value) => {
        setTotal(total + value)
    }
    const withdraw = (value) => {
        if (total - value < 0) setTotal(0)
        else setTotal(total - value)
    }

    return (
        <>
        <h1>{title}</h1>
        <p>Total: £{total}</p>
        <button onClick={() => deposit(5)}>deposit</button>
        <button onClick={() => withdraw(5)}>withdraw</button>
        </>
  );
}
