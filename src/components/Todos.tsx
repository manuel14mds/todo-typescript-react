import type { ListOfTodos, Todo as TodoType } from '../types.s'
import { Todo } from './Todo'

interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: string) => void
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<{ props: Props }> = ({ props }) => {
    return (
        <ul className='todo-list'>
            {props.todos.map((todo: TodoType) => (
                    <li 
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}
                    >
                        <Todo
                        key={todo.id}
                        props={{ 
                            id: todo.id,
                            title: todo.title,
                            completed: todo.completed,
                            onRemoveTodo: props.onRemoveTodo,
                            onToggleCompleteTodo: props.onToggleCompleteTodo 
                        }}
                        />
                    </li>
                ))}
        </ul >
    )
}
