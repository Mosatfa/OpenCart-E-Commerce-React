import { Box, Button, Card, CardBody, CardFooter, CardHeader, Image, Stack, Text } from "@chakra-ui/react";
import { IProduct } from "../interfaces";
import { calculateDiscount } from "../utils/calculateDiscount";
import { Link } from "react-router-dom";
interface IProps {
    product: IProduct
}
const ProductCard = ({ product: { id: productId, title, price, images, discountPercentage } }: IProps) => {
    const { finalPrice, amountSaved } = calculateDiscount(price, discountPercentage)

    return (
        <Card
            as={Link}
            to={`/products/${productId}`}
            display="flex"
            flexDirection={{ lg: "column", sm: "row" }}
            width={{ lg: "100%", sm: "auto" }}
            height={'100%'}
        >
            <CardHeader
                backgroundColor={"var(--bg-card)"}
                flex={{ base: "0.3=", sm: "1" }}
                padding={{ lg: "8px", sm: "inherit" }}
                maxH="200px"
            >
                <Image
                    src={images[0]}
                    alt='detiles photo'
                    objectFit={"contain"}
                    width="200px"
                    height="200px"
                />
            </CardHeader>

            <Stack flex={{ lg: "0.7", sm: "1" }} width="100%">
                <CardBody py={"12px"} pb={"0px"}>
                    <Stack pb={"0px"} spacing='1'>
                        <Text fontSize={14}>{title}</Text>
                        <Box display={"flex"} alignItems={"center"}>
                            <Text fontWeight="bold">{finalPrice}$</Text>
                            <Text fontWeight="light" marginStart={3} textDecoration={"line-through"}>{price}$</Text>
                        </Box>
                        <Text fontSize={14} color={"var(--colors-save)"} fontWeight="light" mt={"6px"}>Save - {amountSaved}$</Text>
                    </Stack>
                </CardBody>

                <CardFooter padding={"12px"}
                    onClick={(e) => e.stopPropagation()}

                >
                    <Button
                        variant={"solid"}
                        size={'sm'}
                        bg={'black'}
                        color={'white'}
                        width={"full"}
                        _hover={{ opacity: "0.8" }}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >Add to cart</Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default ProductCard; 