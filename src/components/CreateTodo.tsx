import { useState } from 'react'
import { type Todo } from '../types.s'

interface PropsType {
    saveTodo: ({ title }: Pick<Todo, 'title'>) => void
}

export const CretaeTodo: React.FC<{ props: PropsType }> = ({ props }) => {
    const { saveTodo } = props
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({ title: inputValue })
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className='new-todo'
                value={inputValue}
                onChange={(event) => { setInputValue(event.target.value) }}
                placeholder='Qué quieres hacer?'
                autoFocus
                >
            </ input>
        </form>
    )
}
