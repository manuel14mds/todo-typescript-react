import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo } from './types.s'

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

    const handleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed }
            }
            
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <div className='todoapp'>
            <Todos
            props = {{ onRemoveTodo: handleRemove, onToggleCompleteTodo: handleCompleted, todos: [...todos] }} 
            
            />
        </div>
    )
}

export default App
