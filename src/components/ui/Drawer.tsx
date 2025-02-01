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
} from '@chakra-ui/react';
import { RefObject } from 'react';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    finalFocusRef: RefObject<HTMLButtonElement>; 
  }

const DrawerComponent = ({ isOpen, onClose, finalFocusRef } :IProps) => {
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
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>
          <Input placeholder='Type here...' />
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' width={'full'} >
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;