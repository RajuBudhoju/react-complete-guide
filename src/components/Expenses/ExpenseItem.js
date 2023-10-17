import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import React, { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    };
    const changeAmountHandler = () => {
        setAmount(100);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={amount}/>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={changeAmountHandler}>Set Amount to $100</button>
        </Card>
    );
}

export default ExpenseItem;