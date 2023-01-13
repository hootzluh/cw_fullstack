const ToDo = {
    id : 1,
    task : 'Shopping',
    completed : false,
    dateEntered : '2023-01-09'
}

const id1 = ToDo.id;
const task1 = ToDo.task;
const completed1 = ToDo.completed;
const dateEntered1 = ToDo.dateEntered;

console.log(id1, task1, completed1, dateEntered1);

////////////////////////////////////////////////////

const {id : todoCounter, task, completed : finished, dateEntered} = ToDo;

console.log(todoCounter, task, finished, dateEntered);

const {task : Action , completed} = ToDo;

console.log(Action, completed);



