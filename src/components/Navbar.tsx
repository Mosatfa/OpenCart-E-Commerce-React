import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useDisclosure,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Divider,
    Center,
    Link,
    HStack,
    Menu,
    MenuButton,
    Avatar,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    SearchIcon,
} from '@chakra-ui/icons'
import logo from '../../public/pngwing.com.png'
import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { useRef } from 'react'
import DrawerCart from './DrawerCart'
import { Link as LinkDom } from 'react-router-dom'
import CookieService from '../service/CookieService'
import { useSelector } from 'react-redux'
import { cartSelector } from '../app/feature/cart/cartSlice'
import { FiChevronDown } from 'react-icons/fi'
import DrawerMobile from './DrawerMobile'
const Navbar = () => {
    const acc_token = CookieService.getCookie('jwt')
    const { isOpen, onToggle } = useDisclosure()
    const { isOpen: isOpenDrawer, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);
    const { cartItem } = useSelector(cartSelector)

    const logoutHandler = () => {
        CookieService.removeCookie('jwt')
        window.location.reload()
    }

    return (
        <Box>
            <Flex
                bg={'#FEFEFE'}
                direction={'column'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                minH={'60px'}
                color={useColorModeValue('gray.600', 'white')}
                py={{ base: 2 }}
                px={{ base: 4 }}
            >
                <Flex
                    align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems={"center"}>
                        <Link as={LinkDom} to={'/'}>
                            <Image
                                src={logo}
                                alt="Logo"
                                objectFit="contain"
                                width={{ base: "120px", md: "150px" }}
                                height="auto"
                                cursor="pointer"
                            />
                        </Link>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        alignItems={'center'}
                        direction={'row'}
                        spacing={2}>
                        {!acc_token &&
                            <Button display={{ base: 'none', md: 'inline-flex' }} as={LinkDom} to={'/login'} fontSize={'sm'} fontWeight={400} variant={'link'}>
                                <IoPersonOutline color='var(--main-color)' />
                                <Text ms={'4px'}>Sign In/Sign Up</Text>
                            </Button>
                        }
                        {!acc_token && <Center height='20px' display={{ base: 'none', md: 'inline-flex' }} >
                            <Divider orientation='vertical' />
                        </Center>
                        }
                        <Button display={'flex'} onClick={onOpen} variant={"unstyled"} fontSize={'sm'} fontWeight={400} bg={'none'} p={0}>
                            <HiOutlineShoppingCart color='var(--main-color)' />
                            <Text ms={'4px'}>Cart({cartItem.length})</Text>
                        </Button>
                        {acc_token &&
                            <HStack spacing={{ base: '0', md: '6' }} ms={5}>
                                <Flex alignItems={'center'}>
                                    <Menu>
                                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                                            <HStack>
                                                <Avatar
                                                    size={'sm'}
                                                    src={
                                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                                    }
                                                />
                                                <Box display={{ base: 'none', md: 'flex' }}>
                                                    <FiChevronDown />
                                                </Box>
                                            </HStack>
                                        </MenuButton>
                                        <MenuList
                                            bg={useColorModeValue('white', 'gray.900')}
                                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                                            <MenuItem>Profile</MenuItem>
                                            <MenuItem>Settings</MenuItem>
                                            <MenuItem>Billing</MenuItem>
                                            <MenuDivider />
                                            <MenuItem onClick={logoutHandler}>Sign out</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </HStack>
                        }

                        <DrawerCart isOpen={isOpenDrawer} onClose={onClose} finalFocusRef={btnRef} />
                    </Stack>
                </Flex>

                <Stack flex={{ base: 1, md: 'auto' }}
                    display={{ base: 'flex', md: 'none' }} px={3} py={1}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='var(--main-color)' />
                        </InputLeftElement>
                        <Input
                            placeholder='Search essentials, groceries and more'
                            _placeholder={{ opacity: 1, color: 'gray.400' }}
                            size='md'
                            htmlSize={50}
                            w={'auto'}
                            bg={'#F3F9FB'}
                            _focus={{ borderColor: "var(--main-color)" }}
                        />
                    </InputGroup>
                </Stack>
            </Flex>

            <DrawerMobile isOpen={isOpen} onClose={onToggle} finalFocusRef={btnRef} />
        </Box>
    )
}

const DesktopNav = () => {
    return (
        <Stack>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='var(--main-color)' />
                </InputLeftElement>
                <Input
                    placeholder='Search essentials, groceries and more'
                    _placeholder={{ opacity: 1, color: 'gray.400' }}
                    size='md'
                    htmlSize={50}
                    w={'auto'}
                    bg={'#F3F9FB'}
                    _focus={{ borderColor: "var(--main-color)" }}
                />
            </InputGroup>
        </Stack>
    )
}

export default Navbar