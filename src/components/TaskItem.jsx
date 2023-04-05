
const TaskItem = (props) => {


    const handleDeleteClick = () => {
        props.removeTask(props.id);
    }

    const handleFinishClick = () => {
      props.finishTask(props.id);
    }


    return (
        <>
            <li className="list-item flex-container">
                <div className="title">{props.title}</div>
                <div className="date">{props.date}</div>
                <div>
                    <button onClick={handleDeleteClick} className="button-danger">&times;</button>
                    <button onClick={handleFinishClick} className="button-success">&#x2713;</button>
                </div>

            </li>
            <hr/>
        </>
    );

}

export default TaskItem;