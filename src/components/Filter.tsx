import { FILTERS_BUTTONS } from '../consts'
import { type FiltersType } from '../types.s'

interface PropsType {
    filterSelected: FiltersType
    onFilterChange: (filter: FiltersType) => void
}

export const Filter: React.FC<{ props: PropsType }> = ({ props }) => {
    const { filterSelected, onFilterChange } = props
    // const handleClick = (filter: FiltersType) => {}
    return (
        <ul className='filters'>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li key={key}>
                            <a 
                            className={className}
                            href={href}
                            onClick={(event) => {
                                event.preventDefault()
                                onFilterChange(key as FiltersType)
                            }}
                            >{literal}</a>
                        </li>
                    )
                })
            }
        </ ul>
    )
}
