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
    const [todos] = useState(mockTodos)
    
    return (
        <div className='todoapp'>
            <Todos todos = {...todos} />
        </div>
    )
}

/*
//es un componente funcional de react
function App (): React.FC {
    return (
        <div>Todo MCV</div>
    )
} */

export default App
