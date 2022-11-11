export const Task = (props)=> {
  return (
    <div className="task" 
    style={{backgroundColor: props.completed ? "#2abf90":"black"}}>
    <h1> {props.taskName}</h1>
    <button className="normal" onClick={ () => props.completeTask(props.id)}>complete</button>
    <button className="normal" onClick={() => props.deleteTask(props.id)}>X</button>
  </div>
  );
};