import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Collapse, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { ICategory } from "../../interfaces"

interface IProps {
    data?: ICategory[],
    name: string
}

const MobileNavItem = ({ name, data }: IProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={2} onClick={data && onToggle}>
            <Box
                py={1}
                as="a"
                display={'flex'}
                alignItems="center"
                cursor={'pointer'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={'bold'}>{name}</Text>
                {name && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={!isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse in={!isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={0}
                    pl={0}
                    align={'start'}>
                    {data &&
                        data.map((child: any) => (
                            <Box  as="a" key={child.id} py={2} href={child.href} fontSize={'sm'}>
                                {child.name}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

export default MobileNavItem