import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

const Product = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoading, data } = useCustomQuery<IProduct>({
        queryKey: ["products", `${id}`],
        url: `/products/${id}`,
    })
    const goBack = () => navigate(-1)

    const { finalPrice, amountSaved } = calculateDiscount(data?.price ?? 0, data?.discountPercentage ?? 0)


    useEffect(() => {
        document.title = `${data?.title}`
    }, [data])
    return (
        <Container maxW={'6xl'} py={12}>
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
                        <Text ms={2} textDecoration={'underline'}>{data?.reviews.length} reviews</Text>
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
                        >Add to cart</Button>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default Product
