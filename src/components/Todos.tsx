import type { ListOfTodos, Todo as TodoType } from '../types.s'
import { Todo } from './Todo'
// import { type ListOfTodos, type Todo } from './types.s'

export const Todos: React.FC<{ todos: ListOfTodos }> = ({ todos }) => {
    return (
        <ul className='todo-list'>
            {todos.map((todo: TodoType) => (
                    <li 
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}
                    >
                        <Todo 
                        key={todo.id}
                        props={{ id: todo.id, title: todo.title, completed: todo.completed }}
                        />
                    </li>
                ))}
        </ul >
    )
}
