import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { IoIosArrowDown } from "react-icons/io"
import { ISubcategory } from "../../interfaces/index";

interface Props {
    children: React.ReactNode
    subcategories: ISubcategory[];
}
const DropMenu = ({ subcategories, children }: Props) => {
    return (
        <Menu>
            <MenuButton fontSize={12} borderRadius={16} bg={'#F3F9FB'} as={Button} rightIcon={<IoIosArrowDown color={'#19BFEF'} fontSize={14} />}>
                {children}
            </MenuButton>
            <MenuList>
                {
                    subcategories.map(({id , name}) => (
                        <MenuItem fontSize={12} key={id}>{name}</MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    )
}

export default DropMenu