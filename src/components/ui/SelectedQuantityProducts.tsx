import { Select } from '@chakra-ui/react'

interface IProps {
    quantity: number
}

const SelectedQuantityProducts = ({ quantity  }: IProps) => {
    return (
        <Select placeholder={`${1}`} size="sm" width="60px">
            {[...Array(quantity)].map((_, index) => (
                <option value={index + 1}>{index + 1}</option>
            ))}
        </Select>
    )
}

export default SelectedQuantityProducts