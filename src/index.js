import { Todo, TodoList } from './class'
import { crearTodoHtml } from './js/componentes';
import './styles.css';

const tarea = new Todo('Aprender JavaScript');
export const todoList = new TodoList();

//console.log(tarea);
/*
todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);

localStorage.setItem('mi-key', 'ABC123');
setTimeout( () => {
    localStorage.removeItem('mi-key')
}, 1500);*/

console.log(todoList.todos);
todoList.todos.forEach(todo => crearTodoHtml(todo));
