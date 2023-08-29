import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
    {
        id: '1',
        title: 'todo 1',
        completed: false
    },
    {
        id: '2',
        title: 'todo 2',
        completed: true
    },
    {
        id: '3',
        title: 'todo 3',
        completed: false
    }
]

function App (): JSX.Element {
    const [todos, setTodos] = useState(mockTodos)
    
    const handleRemove = (id: string): void => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <div className='todoapp'>
            <Todos
            props = {{ onRemoveTodo: handleRemove, todos: [...todos] }} 
            
            />
        </div>
    )
}

export default App
