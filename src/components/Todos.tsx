import { type ListOfTodos, type Todo } from './types.s'

export const Todos: React.FC<{ todos: ListOfTodos }> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo: Todo) => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
        </ul >
    )
}
