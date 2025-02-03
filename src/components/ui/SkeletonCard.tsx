import { Skeleton, Stack } from '@chakra-ui/react'

const SkeletonCard = () => {
    return (
        <Stack spacing={'0.5'}>
            <Skeleton height='200px' />
            <Skeleton height='100px' />
            <Skeleton height='30px' />
        </Stack>
    )
}

export default SkeletonCard