import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Stack, Text } from "@chakra-ui/react"
import { RefObject } from "react"
import useCustomQuery from "../hooks/useCustomQuery";
import { ICategory } from "../interfaces";
import logo from '../../public/pngwing.com.png'
import MobileNavItem from "./ui/MobileNavItem";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    finalFocusRef: RefObject<HTMLButtonElement>;
}

const DrawerMobile = ({ isOpen, onClose, finalFocusRef }: IProps) => {

    const { data } = useCustomQuery<ICategory[]>({
        queryKey: ["categories"],
        url: `/products/categories`,
    })

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={finalFocusRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
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
                                <MobileNavItem name="Categories" data={data} />
                            </Box>
                            <Box>
                                <Text fontWeight={'bold'}>Help & Settings</Text>
                                <Stack spacing={2} mt={2} fontSize={'sm'}>
                                    <Box as="a">
                                        Your Account
                                    </Box>
                                    <Box as="a">
                                        Sign in
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerMobile