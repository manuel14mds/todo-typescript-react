import { type Todo } from '../types.s'
import { CretaeTodo } from './CreateTodo'

interface PropsType {
    onAddTodo: ({ title }: Pick<Todo, 'title'>) => void
}

export const Header: React.FC<{ props: PropsType }> = ({ props }) => {
    const { onAddTodo } = props   
    return (
        <header
        className="header">
            <h1>Todos</h1>
            <CretaeTodo props={{ saveTodo: onAddTodo }} />
        </ header>
    )
}
