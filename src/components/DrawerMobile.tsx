import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Stack, Text } from "@chakra-ui/react"
import { RefObject } from "react"
import useCustomQuery from "../hooks/useCustomQuery";
import { ICategory } from "../interfaces";
import logo from '../../public/pngwing.com.png'
import MobileNavItem from "./ui/MobileNavItem";
import CookieService from "../service/CookieService";
import { Link } from "react-router-dom";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    finalFocusRef: RefObject<HTMLButtonElement>;
}

const DrawerMobile = ({ isOpen, onClose, finalFocusRef }: IProps) => {
    const acc_token = CookieService.getCookie('jwt')

    const { data } = useCustomQuery<ICategory[]>({
        queryKey: ["categories"],
        url: `/products/categories`,
    })

    const logoutHandler = () => {
        CookieService.removeCookie('jwt')
        window.location.reload()
    }

    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={finalFocusRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader pb={0}>
                    <Image
                        src={logo}
                        alt="Logo"
                        objectFit="contain"
                        width={{ base: "120px", md: "150px" }}
                        height="auto"
                        cursor="pointer"
                    />
                </DrawerHeader>

                <DrawerBody p={0}>
                    <Stack spacing={3} p={6}>
                        <Box
                            borderBottom={1}
                            borderStyle={'solid'}
                            borderColor={'#d5dbdb'}>
                            <Text fontWeight={'bold'}>Categories</Text>
                            {data &&
                                data.map((item) => (
                                    <MobileNavItem key={item.name} label={item.name} subcategories={data} />
                                ))
                            }
                        </Box>
                        <Box>
                            <Text fontWeight={'bold'}>Help & Settings</Text>
                            <Stack spacing={3} mt={2} fontSize={'sm'} fontWeight={'500'}>
                                <Box as="a">
                                    Your Account
                                </Box>
                                {acc_token &&
                                    <Button w={'fit-content'}
                                        as={Link}
                                        to={'/login'}
                                        variant={'link'}
                                        fontSize={'sm'}
                                        fontWeight={'500'}
                                        color={'#1a202c'}
                                        onClick={logoutHandler}>
                                        Sign out
                                    </Button>
                                }

                                {!acc_token &&
                                    <Button
                                        w={'fit-content'}
                                        as={Link}
                                        to={'/login'}
                                        variant={'link'}
                                        fontSize={'sm'} fontWeight={'500'} color={'#1a202c'}>
                                        Sign In/Sign Up
                                    </Button>
                                }
                            </Stack>
                        </Box>
                    </Stack>
                </DrawerBody>
            </DrawerContent >
        </Drawer >
    )
}

export default DrawerMobile