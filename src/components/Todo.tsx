import type { Todo as TodoType } from '../types.s'

export const Todo: React.FC<{ props: TodoType }> = ({ props }) => {
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
            onClick={() => {}}
            ></button>
        </ div>
    )
}
