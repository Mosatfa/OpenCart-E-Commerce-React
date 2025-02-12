import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Button,
  Box,
  Stack,
  Card,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { RefObject } from 'react';
import CartDrawerItem from './CartDrawerItem';
import { useSelector } from 'react-redux';
import { cartSelector, clearCart } from '../app/feature/cart/cartSlice';
import { useAppDispatch } from '../app/store';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  finalFocusRef: RefObject<HTMLButtonElement>;
}

const DrawerCart = ({ isOpen, onClose, finalFocusRef }: IProps) => {
  const { cartItem } = useSelector(cartSelector)
  const dispatch = useAppDispatch()


  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader padding={2}>Your Shopping Cart</DrawerHeader>

        <DrawerBody padding={2} className='drawer-Body'>
          <Stack spacing={2}>
            {cartItem.map((product) => (
              <Card key={product.id} p={2}>
                <CartDrawerItem product={product} />
              </Card>
            ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter >
          <Button variant='outline' mr={3} width={'full'} >
            Checkout
          </Button>
          <Button variant='outline' width={'full'} onClick={() => dispatch(clearCart())} >
            Clear
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCart;