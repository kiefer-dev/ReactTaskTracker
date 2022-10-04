import Task from './Task'

function Tasks(props) {
    return (
        <div>
            {props.tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={props.onDelete}/>
            ))}
        </div>
    )
}

export default Tasks
