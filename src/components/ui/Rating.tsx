import { FaStar } from 'react-icons/fa';
import { Box, Flex } from '@chakra-ui/react';

interface IProps {
    rating?:number,
    maxRating?:number
}

const Rating = ({ rating = 0, maxRating = 5 }:IProps) => {
  return (
    <Flex>
      {[...Array(maxRating)].map((_, index) => (
        <Box
          key={index}
          color={index < rating ? 'yellow.400' : 'gray.300'}
          as={FaStar}
          boxSize="20px"
        />
      ))}
    </Flex>
  );
};

export default Rating;