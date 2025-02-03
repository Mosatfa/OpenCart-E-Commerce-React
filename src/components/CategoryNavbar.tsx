import {
    Box,
    Button,
    Flex,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react'
import DropMenu from './ui/DropMenu';
import { categories } from '../data/categories';
import useCustomQuery from '../hooks/useCustomQuery';
import { ICategory } from '../interfaces';

interface IPrpos {
    display?: object;
}

const CategoryNavbar = ({ display }: IPrpos) => {
    const { isLoading, data } = useCustomQuery<ICategory[]>({
        queryKey: ["categories"],
        url: `/products/categories`,
    })


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
                            {
                                data?.length ?
                                    data.slice(0,10).map(({ name }, index) => (
                                        // subcategories ? <DropMenu subcategories={subcategories} key={id}>{name}</DropMenu> :
                                        //     <Button key={id} fontSize={12} borderRadius={16} bg={'#F3F9FB'}>{name}</Button>
                                        <Button key={index} fontSize={12} borderRadius={16} bg={'#F3F9FB'}>{name}</Button>
                                    ))
                                    : null
                            }
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}

export default CategoryNavbar