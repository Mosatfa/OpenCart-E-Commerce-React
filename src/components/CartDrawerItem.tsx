import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { IProduct } from '../interfaces'
import { useAppDispatch } from '../app/store'
import { removeItemFromCart } from '../app/feature/cart/cartSlice'

interface IProps {
    product: IProduct
}

const CartDrawerItem = ({ product }: IProps) => {
    const dispatch = useAppDispatch()
    return (
        <Flex
            alignItems={'center'}

        >
            <Image
                backgroundColor={"var(--bg-card)"}
                src={product.images[0]}
                alt={product.title}
                objectFit={"contain"}
                width="100px"
            />
            <Stack flex={1} ms={3}>
                <Text fontSize={'xs'}>{product.title}</Text>
                <Text fontSize={'xs'}>Price: {product.price * (product.qty || 1)}</Text>
                <Text fontSize={'xs'}>Quantity: {product.qty}</Text>
                <Button size={'xs'} variant={'outline'} maxW={'full'} fontSize={'xs'} onClick={() => dispatch(removeItemFromCart(product))}>Remove</Button>
            </Stack>
        </Flex>
    )
}

export default CartDrawerItem