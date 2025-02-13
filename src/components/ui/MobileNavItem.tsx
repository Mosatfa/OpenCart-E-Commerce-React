import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Collapse, Icon, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { ICategory } from "../../interfaces"

interface IProps {
    children?: ICategory[],
    label: string
}

const MobileNavItem = ({ label, children }: IProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={0} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={'#'}
                display={'flex'}
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontSize={'sm'} fontWeight={'500'} >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        ms={1}
                        w={5}
                        h={5}
                    />
                )}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={0}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.name} py={2} fontSize={'xs'} fontWeight={'500'}>
                                {child.name}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

export default MobileNavItem