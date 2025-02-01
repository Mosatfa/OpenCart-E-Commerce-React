import { Box, Button, Card, CardBody, CardFooter, CardHeader, Image, Stack, Text } from "@chakra-ui/react";
const ProductCard = () => {
    return (
        <Card
            display="flex"
            flexDirection={{ lg: "column", sm: "row" }}
            width={{ lg: "100%", sm: "auto" }}
        >
            <CardHeader
                backgroundColor={"var(--bg-card)"}
                flex={{ base: "0.3=", sm: "1" }}
                padding={{ lg: "8px", sm: "inherit" }}
            >
                <Image
                    src='/public/products/559aa04b-bc99-467b-9b69-76dfa44e4f53-removebg-preview.png'
                    alt='detiles photo'
                    objectFit={"cover"}
                    width="100%"
                    height="100%"
                />
            </CardHeader>

            <Stack flex={{ lg: "0.7", sm: "1" }} width="100%">
                <CardBody py={"12px"} pb={"0px"}>
                    <Stack pb={"0px"} spacing='1'>
                        <Text fontSize={14}>Original Apple Iphone 12 512GB</Text>
                        <Box display={"flex"} alignItems={"center"}>
                            <Text fontWeight="bold">350$</Text>
                            <Text fontWeight="light" marginStart={3} textDecoration={"line-through"}>450$</Text>
                        </Box>
                        <Text fontSize={14} color={"var(--colors-save)"} fontWeight="light" mt={"6px"}>Save - 100$</Text>
                    </Stack>
                </CardBody>

                <CardFooter padding={"12px"}>
                    <Button
                        variant={"solid"}
                        size={'sm'}
                        bg={'black'}
                        color={'white'}
                        width={"full"}
                        _hover={{ opacity: "0.8" }}
                    >Add to cart</Button>
                </CardFooter>
            </Stack>
        </Card>

    );
};

export default ProductCard; 