import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Collapse, Icon, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { ISubcategory } from "../../interfaces"


interface IProps {
    subcategories?: ISubcategory[],
    label: string,
}

const CategorySideBar = ({ label, subcategories }: IProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={0}>
            <Box
                onClick={subcategories && onToggle}
                py={1}
                as="a"
                cursor={'pointer'}
                display={'flex'}
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontSize={'xs'} fontWeight={500} >
                    {label}
                </Text>
                {subcategories && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        ms={1}
                        w={4}
                        h={4}
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
                    {subcategories &&
                        subcategories.map((child) => (
                            <Box
                                as="a"
                                cursor={'pointer'}
                                key={child.name}
                                py={0}
                                fontSize={'xs'}
                                fontWeight={'400'}>
                                {child.name}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

export default CategorySideBar