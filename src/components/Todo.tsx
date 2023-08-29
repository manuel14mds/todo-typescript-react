import type { Todo as TodoType } from '../types.s'

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
}
export const Todo: React.FC<{ props: Props }> = ({ props }) => {
    return (
        <div className='view'>
            <input 
            className='toggle'
            type="checkbox"
            checked={props.completed}
            onChange={() => {}}
            />
            <label>{props.title}</label>
            <button
            className='destroy'
            onClick={() => { props.onRemoveTodo(props.id) }}
            ></button>
        </ div>
    )
}
