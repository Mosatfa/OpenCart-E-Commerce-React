import { HStack, Skeleton } from '@chakra-ui/react'

const SkeletonProduct = () => {
    return (
        <HStack>
            <Skeleton flex={1} height="400px"  />
            <Skeleton flex={1} height="400px"/>
        </HStack>
    )
}

export default SkeletonProduct