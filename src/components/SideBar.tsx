import {
    Box,
    Flex,
    Stack,
    Text,
    Link,
    useColorModeValue,
    Button,
    Checkbox,
} from "@chakra-ui/react";
import Range from "./Range";
import { useState } from "react";


interface IPrpos {
    display?: object;
}
const Sidebar = ({ display }: IPrpos) => {
    const textColor = useColorModeValue("gray.800", "white");
    const [currentRange, setCurrentRange] = useState([6000, 10000]); // State to hold current range values

    // Callback function to update range values
    const handleRangeChange = (newRange:number[]) => {
      setCurrentRange(newRange);
    };
    

    return (
        <Box
            display={display}
            w="250px"
            h="100vh"
            bg={'#fff'}
            color={textColor}
            p={4}
        >
            <Stack>
                <Flex direction="column" h="100%">
                    {/* Logo or Brand */}
                    <Text fontSize="sm" fontWeight="bold">
                        Category
                    </Text>
                    <Stack spacing={0} flex={1}>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            <Checkbox size={'sm'}>
                                <Text fontSize={'xs'} fontWeight={500}>Kindle E-readers</Text>
                            </Checkbox>
                        </Link>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            <Checkbox size={'sm'}>
                                <Text fontSize={'xs'} fontWeight={500}>Electronics</Text>
                            </Checkbox>
                        </Link>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            <Checkbox size={'sm'}>
                                <Text fontSize={'xs'} fontWeight={500}>Canned, Jarred & Packaged Foods</Text>
                            </Checkbox>
                        </Link>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            <Checkbox size={'sm'}>
                                <Text fontSize={'xs'} fontWeight={500}>Baking Supplies</Text>
                            </Checkbox>
                        </Link>
                    </Stack>
                </Flex>
                <Flex direction="column" h="100%">
                    {/* Logo or Brand */}
                    <Text fontSize="sm" fontWeight="bold">
                        Brands
                    </Text>
                    <Stack spacing={0} flex={1}>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            <Checkbox size={'sm'}>
                                <Text fontSize={'xs'} fontWeight={500}>OpenCart</Text>
                            </Checkbox>
                        </Link>
                    </Stack>
                </Flex>
                <Flex direction="column" h="100%">
                    {/* Logo or Brand */}
                    <Text fontSize="sm" fontWeight="bold">
                        Price
                    </Text>
                    <Stack spacing={0} flex={1}>
                        <Text fontSize={'xs'} fontWeight={700} mb={'0'}>{`${currentRange[0]} - ${currentRange[1]} & above`}</Text>
                        <Flex>
                            <Range onChange={handleRangeChange} />
                            <Button fontSize={'xs'} borderRadius={'30%'} marginStart={3} p={1}>Go</Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Stack>
        </Box>
    );
};

export default Sidebar;