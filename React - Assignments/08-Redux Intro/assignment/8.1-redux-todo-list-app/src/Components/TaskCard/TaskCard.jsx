// TaskCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../store/actions/index';
import './TaskCard.css';

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className="task-card">
            <span className={task.completed ? 'completed' : ''}>
                {task.text}
            </span>
            <button className="toggle-task" onClick={() => dispatch(toggleTask(task.id))}>
                {task.completed ? 'Mark as Uncompleted' : 'Mark as Completed'}
            </button>
            <button className="delete-task" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
            </button>
        </div>
    );
};

export default TaskCard;
