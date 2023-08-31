import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FiltersType, type Todo } from './types.s'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'

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
    const [filterSelected, setFilterSelected] = useState<FiltersType>(TODO_FILTERS.ACTIVE)
    
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

    const handleFilterChange = (filter: FiltersType): void => {
        setFilterSelected(filter)
    }

    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount

    const filteredTodos = todos.filter(todo => {
        if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
        if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
        return todo
    })

    const handleRemoveAllCompleted = (): void => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }

    const onAddTodo = ({ title }: Pick<Todo, 'title'>): void => {
        const newTodo = {
            title,
            id: crypto.randomUUID(),
            completed: false
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }
    return (
        <div className='todoapp'>
            <Header props={{ onAddTodo }}/>
            <Todos
            props = {{ onRemoveTodo: handleRemove, onToggleCompleteTodo: handleCompleted, todos: filteredTodos }} 
            />
            <Footer
                props={
                    { 
                        handleFilterChange,
                        activeCount, 
                        filterSelected, 
                        completedCount, 
                        onClearCompleted: handleRemoveAllCompleted
                    }
                }
            />
        </div>
    )
}

export default App
