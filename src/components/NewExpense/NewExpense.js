import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react/cjs/react.development';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    function startEditingHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler(){
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
            )}
        </div>
    );
}

export default NewExpense;