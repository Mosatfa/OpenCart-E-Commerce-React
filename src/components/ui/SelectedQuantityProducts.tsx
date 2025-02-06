import { Select } from '@chakra-ui/react'

interface IProps {
    quantity: number
}

const SelectedQuantityProducts = ({ quantity }: IProps) => {
    return (

        <Select size="sm" width="60px">
            {[...Array(quantity)].map((_, index) => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
        </Select>
    )
}

export default SelectedQuantityProducts