import TaskList from "./components/TaskList.jsx";
import TaskItem from "./components/TaskItem.jsx";
import TaskForm from "./components/TaskForm.jsx";
import DoneItem from "./components/DoneItem.jsx";

import {useState} from "react";

function App() {

    const [tasks, setTask] = useState('');

    const [done_tasks, setDoneTask] = useState('');

    // const handleClick = () => {
    //     setTask(
    //         [{
    //             title: "hadalj",
    //             date: new Date(2023, 3, 10),
    //         },
    //             ...tasks
    //         ]
    //     );
    // }

    function taskRemoveHandler(id) {
        const newList = tasks.filter((task, index) => index !== id);
        setTask(newList);
    }

    function doneTaskRemoveHandler(id) {
        const newList = done_tasks.filter((task, index) => index !== id);
        setDoneTask(newList);
    }

    function finishTaskHandler(id) {
        const newTask = tasks.filter((task, index) => index === id);

        if (done_tasks.length === 0) {
            setDoneTask(newTask);
        }
        else {
            setDoneTask([newTask, ...done_tasks]);
        }

        taskRemoveHandler(id);
    }

    const addExpenseHandler = (task) => {
        setTask(
            [task, ...tasks]
        );
    }

    return (
        <>
            {/*<button onClick={handleClick}>klik</button>*/}
            <h1 className="center">TO-DO LIST</h1>
            <div className="center">
                <TaskForm onAddExpense={addExpenseHandler}></TaskForm>
            </div>
            <div className="center">

                <TaskList>
                    <li>
                        <h1 className="center">Tasks</h1>
                    </li>
                    {tasks.length === 0 ?
                    (
                        <p>There are no tasks to display.</p>
                    ) : (
                        tasks.map((task, index) => (
                            <TaskItem
                                removeTask={taskRemoveHandler}
                                finishTask={finishTaskHandler}
                                key={index}
                                id={index}
                                title={task.title}
                                date={task.date.toDateString()}
                            />
                    )))}
                </TaskList>
            </div>
            <div className="center">
                <TaskList>
                    <li>
                        <h1 className="center">Done</h1>
                    </li>
                    {done_tasks.length === 0 ?
                    (
                        <p>You have not done anything yet :(</p>
                    ) : (
                        done_tasks.map((task, index) => (
                            <DoneItem
                                removeItem={doneTaskRemoveHandler}
                                key={index}
                                id={index}
                                title={task.title}
                                date={task.date.toDateString()}
                            />
                    )))}
                </TaskList>
            </div>
        </>
    )
}

export default App
