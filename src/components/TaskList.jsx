
const TaskList = (props) => (
  <div className="card">
      <ul className="no-bullets">{props.children}</ul>
  </div>
);

export default TaskList;