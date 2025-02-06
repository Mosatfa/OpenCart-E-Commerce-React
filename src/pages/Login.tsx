import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    useColorModeValue,
    Link,
    Text,
    LinkBox,
    InputGroup,
    InputRightElement,
    FormHelperText,
    useToast,
} from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom";
import HeadingForm from '../components/ui/Heading';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { IUserLogin } from '../interfaces';
import { useLoginUserMutation } from '../app/feature/login/loginSlice';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../validation';
import CookieService from '../service/CookieService';

const LoginPage = () => {
    // ** State
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    // ** Handler
    const onSubmit: SubmitHandler<IUserLogin> = async data => {
        try {
            const response = await loginUser({ email: data.email, password: data.password }).unwrap();
            const dateTime = new Date();
            dateTime.setTime(dateTime.getTime() + 1000 * 60 * 60 * 24 * 3)            
            CookieService.setCookie('jwt', response.results?.access_token, {
                expires: dateTime
            });
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 1000,
                isClosable: false,
            });
            setTimeout(() => {
                location.replace("/");
            }, 2000);
        } catch (error: any) {
            toast({
                title: "Login Failed",
                description: error?.data?.message || "Invalid credentials",
                status: "error",
                duration: 3000,
                isClosable: false,
            });
        }

    }
    return (
        <Flex
            minH={'100vh'}
            align={'none'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')} >
            <Stack spacing={8} mx={'auto'} maxW={'xl'} py={0} px={6}>
                <HeadingForm title='Sign in' />
                <Box
                    as={'form'}
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    w={'md'}
                    p={8}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input isInvalid={!!errors.email} type="email" {...register('email')} />
                            {errors.email && <FormHelperText color={'red.500'} >{errors.email.message}</FormHelperText>}
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input isInvalid={!!errors.password} type={showPassword ? 'text' : 'password'} {...register('password')} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {errors.password && <FormHelperText color={'red.500'} >Password is required.</FormHelperText>}
                        </FormControl>
                        <Stack spacing={5}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link as={RouterLink} to="/ForgetPassword" color={'blue.400'}  >Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={!!errors.email && !!errors.password ? 'red.500' : 'var(--main-color)'}
                                color={'white'}
                                type={'submit'}
                                isLoading={isLoading}
                            >
                                Sign in
                            </Button>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Not a memmber? <LinkBox as={RouterLink} to={'/auth/register'} color={'blue.400'}>SignUp now</LinkBox>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}

export default LoginPage