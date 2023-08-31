import type { Todo as TodoType } from '../types.s'

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todo: React.FC<{ props: Props }> = ({ props }) => {
    const { id, completed, title, onToggleCompleteTodo } = props
    return (
        <div className='view'>
            <input
                className='toggle'
                type="checkbox"
                checked={completed}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onToggleCompleteTodo({ id, completed: event.target.checked })
                }}
                />
            <label>{title}</label>
            <button
                className='destroy'
                onClick={() => { props.onRemoveTodo(id) }}
            ></button>
        </ div>
    )
}
