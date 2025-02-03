import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Image,
    Link
} from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom";
import logo from '../../public/pngwing.com.png'


const LoginPage = () => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')} >
            <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
                <Stack align={'center'}>
                    <Image
                        src={logo}
                        alt="Logo"
                        objectFit="contain"
                        width={{ base: "120px", md: "150px" }}
                        height="auto"
                        cursor="pointer"
                    />
                    <Heading fontSize={'2xl'}>Sign in or create an account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    w={'md'}
                    p={8}>
                    
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link as={RouterLink} to="/ForgetPassword" color={'blue.400'}  >Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'var(--main-color)'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default LoginPage