export interface IngredientListItemProps {
    count: number
    unit: string
    name: string
    optional?: boolean
    onDelete?: () => void
    onEdit?: () => void
}