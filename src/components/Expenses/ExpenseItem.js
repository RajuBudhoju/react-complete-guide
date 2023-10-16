import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const clickHandler = () => {
        console.log('Clicked!!!');
    };
    const deleteHandler = () => {
        console.log('Delete Clicked');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount}/>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteHandler}>Delete</button>
        </Card>
    );
}

export default ExpenseItem;