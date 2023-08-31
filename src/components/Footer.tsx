import type { FiltersType } from '../types.s'
import { Filter } from './Filter'
interface Props {
    activeCount: number
    onClearCompleted: () => void
    completedCount: number
    filterSelected: FiltersType 
    handleFilterChange: (filter: FiltersType) => void
}
export const Footer: React.FC<{ props: Props }> = ({ props }) => {
    const { filterSelected, handleFilterChange, activeCount, completedCount, onClearCompleted } = props
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> pendientes
            </span>

            <Filter
                props = {{ filterSelected, onFilterChange: handleFilterChange }}
                />
            
            {
                completedCount > 0 &&
                <button
                    className='clear-completed'
                    onClick={onClearCompleted}
                > Borrar Completadas</button>

            }
        </ footer>
    )
}
