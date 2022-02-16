import React from 'react'
import { IngredientListItemProps } from './IngredientListItemProps'

const IngredientListItem: React.FunctionComponent<IngredientListItemProps> = (props) => {
    const [isHover,setIsHover] = React.useState(false)

    const setHoverOn = () => {
        setIsHover(true)
    }

    const setHoverOff = () => {
        setIsHover(false)
    }

    return (
        <div
            className='ingredient-list-item'
            onMouseEnter={setHoverOn}
            onMouseLeave={setHoverOff}
        >
            <span>{props.count} {props.unit}</span>
            <p>{props.name}</p>
            {props.optional && <span>(Optional)</span>}
            {isHover && (
                <div>
                    <span
                        onClick={props.onEdit}
                    >Edit</span>
                    <span
                        onClick={props.onDelete}
                    >Remove</span>
                </div>
            )}
        </div>
    )
}

export default IngredientListItem