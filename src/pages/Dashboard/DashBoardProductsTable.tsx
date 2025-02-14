import { Button, Table,  TableContainer, Tbody, Td,  Th, Thead, Tr } from '@chakra-ui/react'
import useCustomQuery from '../../hooks/useCustomQuery'
import { IProduct } from '../../interfaces'
import { Link } from 'react-router-dom'

interface IProps {

}

const DashBoardProductsTable = ({ }: IProps) => {
    const {  data } = useCustomQuery<{ products: IProduct[] }>({
        queryKey: ["products",],
        url: `/products`,
    })

    return (
        <TableContainer bg={'#fff'} rounded={'md'} shadow={'sm'} p={0}>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Title</Th>
                        <Th>Category</Th>
                        <Th>Price</Th>
                        <Th>Brand</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.products?.length &&
                        data?.products.map((product) => (
                            <Tr key={product.id}>
                                <Td>{product.title}</Td>
                                <Td>{product.category}</Td>
                                <Td>{product.price}</Td>
                                <Td>{product.brand}</Td>
                                <Td display={'flex'} justifyContent={'space-between'}>
                                    <Button as={Link} to={`/products/${product.id}`} flex={1} color="black" variant={'link'} size={'xs'}>
                                        view
                                    </Button>
                                    <Button flex={1} color="blue.500" variant={'ghost'} size={'xs'}>
                                        Edit
                                    </Button>
                                    <Button  flex={1} color="red.500" variant={'ghost'} size={'xs'} ms={1}>
                                        Delete
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default DashBoardProductsTable

