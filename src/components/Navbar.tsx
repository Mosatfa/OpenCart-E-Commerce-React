import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    useColorModeValue,
    useDisclosure,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Divider,
    Center,
    Link,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    SearchIcon,
} from '@chakra-ui/icons'
import logo from '../../public/pngwing.com.png'
import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { useRef } from 'react'
import DrawerComponent from './ui/Drawer'
import { Link as LinkDom } from 'react-router-dom'
import CookieService from '../service/CookieService'
const Navbar = () => {
    const acc_token = CookieService.getCookie('jwt')
    const { isOpen, onToggle } = useDisclosure()
    const { isOpen: isOpenDrawer, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement>(null);

    const logoutHandler = () => {
        CookieService.removeCookie('jwt')
        window.location.reload()
    }

    return (
        <Box>
            <Flex
                // bg={useColorModeValue('white', 'gray.800')}
                bg={'#FEFEFE'}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
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
                        <Button display={{ base: 'none', md: 'inline-flex' }} as={LinkDom} to={'/auth/login'} fontSize={'sm'} fontWeight={400} variant={'link'}>
                            <IoPersonOutline color='var(--main-color)' />
                            <Text ms={'4px'}>Sign In/Sign Up</Text>
                        </Button>
                    }
                    {!acc_token && <Center height='20px'>
                        <Divider orientation='vertical' />
                    </Center>
                    }
                    <Button display={'flex'} onClick={onOpen} variant={"unstyled"} fontSize={'sm'} fontWeight={400} bg={'none'} p={0}>
                        <HiOutlineShoppingCart color='var(--main-color)' />
                        <Text ms={'4px'}>Cart</Text>
                    </Button>
                    {acc_token && <Button onClick={logoutHandler} variant='outline' color={'gray.700'} fontSize={'sm'} fontWeight={400} size={'sm'}>
                        Log Out
                    </Button>
                    }


                    <DrawerComponent isOpen={isOpenDrawer} onClose={onClose} finalFocusRef={btnRef} />
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack>
            {/* {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))} */}
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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Box
            as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'var(--main-color)' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'var(--main-color)'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inspiration',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Find Work',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
]


export default Navbar