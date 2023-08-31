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
    const { filterSelected, handleFilterChange, activeCount } = props
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filter
                props = {{ filterSelected, onFilterChange: handleFilterChange }}
                />
        </ footer>
    )
}
