import {useState} from "react";

const TaskForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            title: enteredTitle,
            date: new Date(enteredDate),
        };

        console.log(taskData);
        props.onAddExpense(taskData);

        setEnteredDate('');
        setEnteredTitle('');
    }

    return  (
      <form className="card" onSubmit={submitHandler}>
          <div>
              <label htmlFor="title">Title: </label>
              <input className="input title" type="text" value={enteredTitle} onChange={titleChangeHandler}/>
          </div>

          <div>
              <label htmlFor="date">Date: </label>
              <input className="input date" type="date" value={enteredDate} onChange={dateChangeHandler}/>
          </div>

          <button type="submit" className="input submit-button">Add task</button>
      </form>
    );
}

export default TaskForm;