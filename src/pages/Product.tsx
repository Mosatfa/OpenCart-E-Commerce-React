import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCustomQuery from '../hooks/useCustomQuery'
import { IProduct } from '../interfaces'
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    Button,
} from '@chakra-ui/react'
import Rating from '../components/ui/Rating'
import { calculateDiscount } from '../utils/calculateDiscount'
import SelectedQuantityProducts from '../components/ui/SelectedQuantityProducts'
import SkeletonProduct from '../components/ui/SkeletonProduct'
import { useAppDispatch } from '../app/store'
import { addItemToCard } from '../app/feature/cart/cartSlice'

const Product = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    // const navigate = useNavigate()
    // const goBack = () => navigate(-1)
    const [originalTitle, setOriginalTitle] = useState(document.title);
    const { isLoading, data } = useCustomQuery<IProduct>({
        queryKey: ["products", `${id}`],
        url: `/products/${id}`,
    })

    const { finalPrice, amountSaved } = calculateDiscount(data?.price || 0, data?.discountPercentage || 0)

    useEffect(() => {
        if (!originalTitle) {
            setOriginalTitle(document.title);
        }

        if (data?.title) {
            document.title = data.title;
        } else {
            document.title = originalTitle;
        }

        return () => {
            document.title = originalTitle;
        };
    }, [data]);


    const addToCardHandler = () => {
        if (data) {
            const { id, title, price, images, description, qty } = data
            dispatch(addItemToCard({ id, title, price, images, description, qty }))
        }
    }

    return (
        <Container maxW={'6xl'} py={12}>
            {
                isLoading ? (
                    <SkeletonProduct />
                ) : (data ?
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'feature image'}
                                src={
                                    data?.images[0]
                                }
                                objectFit={'cover'}
                                maxH={'400px'}
                            />
                        </Flex>
                        <Stack spacing={2}>
                            <Heading fontSize={'xx-large'} fontWeight={500}>{data?.title}</Heading>
                            <Text>Brand: {data?.brand}</Text>
                            <Box display={'flex'} alignItems={'center'}>
                                <Text me={1}>{data?.rating}</Text>
                                <Rating rating={data?.rating} />
                                <Text ms={2} textDecoration={'underline'}>{data?.reviews?.length} reviews</Text>
                            </Box>
                            <Box display={"flex"} alignItems={"center"}>
                                <Text fontSize={'xl'} fontWeight={500}>{finalPrice}$</Text>
                                <Text fontWeight="light" marginStart={3} textDecoration={"line-through"}>{data?.price}$</Text>
                            </Box>
                            <Text fontSize={16} color={"var(--colors-save)"} fontWeight={500}>Save - {amountSaved}$</Text>
                            <Text color={'gray.500'} fontSize={'lg'}>
                                {data?.description}
                            </Text>
                            <Stack
                                spacing={5}
                            >
                                <Box display={'flex'} alignItems={'center'} mt={2}>
                                    <Text me={2}>Quantity:</Text>
                                    <SelectedQuantityProducts quantity={data?.stock || 0} />
                                </Box>
                                <Button
                                    variant={"solid"}
                                    size={'md'}
                                    bg={'black'}
                                    color={'white'}
                                    width={"full"}
                                    _hover={{ opacity: "0.8" }}
                                    mt={2}
                                    textTransform={'capitalize'}
                                    onClick={addToCardHandler}
                                >Add to cart</Button>
                            </Stack>
                        </Stack>
                    </SimpleGrid>

                    : <h3>not found</h3>

                )
            }

        </Container>
    )
}

export default Product
