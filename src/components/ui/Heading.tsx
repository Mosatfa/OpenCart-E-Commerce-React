import { Image, Stack, Heading, LinkBox } from "@chakra-ui/react"
import logo from '../../../public/pngwing.com.png'
import { Link } from "react-router-dom"

interface IProps {
    title: string
}

const HeadingForm = ({ title }: IProps) => {
    return (
        <Stack align={'center'}>
            <LinkBox as={Link} to={'/'}>
                <Image
                    src={logo}
                    alt="Logo"
                    objectFit="contain"
                    width={{ base: "120px", md: "150px" }}
                    height="auto"
                    cursor="pointer"
                />
            </LinkBox>
            <Heading fontSize={'2xl'}>{title}</Heading>
        </Stack>
    )
}

export default HeadingForm