
const DoneItem = (props) => {


    const handleDeleteClick = () => {
        props.removeItem(props.id);
    }


    return (
        <>
            <li className="list-item flex-container">
                <div className="title">{props.title}</div>
                <div className="date">{props.date}</div>
                <div>
                    <button onClick={handleDeleteClick} className="button-danger">&times;</button>
                </div>

            </li>
            <hr/>
        </>
    );

}

export default DoneItem;