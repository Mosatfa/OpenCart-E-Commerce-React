import {
    Box,
    Button,
    Flex,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react'
import DropMenu from './ui/DropMenu';
import { categories } from '../data/categories';

interface IPrpos {
    display?: object;
}

const CategoryNavbar = ({ display }: IPrpos) => {
    return (
        <>
            <Box
                display={display}
                bg={'#FEFEFE'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                px={4}
                overflow={'auto'}
                className='scrollable-content'
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack as={'nav'} spacing={2} display={{ base: 'none', md: 'flex' }}>
                            {categories.map(({ id, name }) => (
                                // subcategories ? <DropMenu subcategories={subcategories} key={id}>{name}</DropMenu> :
                                //     <Button key={id} fontSize={12} borderRadius={16} bg={'#F3F9FB'}>{name}</Button>
                                <Button key={id} fontSize={12} borderRadius={16} bg={'#F3F9FB'}>{name}</Button>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}

export default CategoryNavbar