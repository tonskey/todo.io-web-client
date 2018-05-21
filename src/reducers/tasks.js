import { firebase } from '../firebase';

const INITIAL_STATE = {
    tasks: [],
};

const applyAddTask = (state, action) => {
    console.log(action.task.date);
    firebase.database().ref().child('tasks').push().set({
        text: action.task.text,
        date: action.task.date,
        completed: false,
    });

    return {
        ...state,
        tasks: state.tasks.concat({
            id: state.tasks.length,
            text: action.task.text,
            date: action.task.date,
            completed: false,
        })
    }
};

const applyToggleTask = (state, action) => ({
    ...state,
    tasks: state.tasks.map(task=>
        (task.id === action.task.id)
            ? {...task, completed: !task.completed}
            : task
    )
});

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_TASK' : {
            return applyAddTask(state, action);
        }
        case 'TOGGLE_TASK' : {
            return applyToggleTask(state, action);
        }
        default : return state;
    }
}

export default tasksReducer;
