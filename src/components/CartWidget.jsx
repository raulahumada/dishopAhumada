import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {
  return (
    <>
      <Button
        variant={'solid'}
        colorScheme={'cyan'}
        size={'sm'}
        mr={4}
        leftIcon={<AiOutlineShoppingCart />}
        _hover={{
          transform: 'translateY(-1px)',
        }}
      >
        Carrito
      </Button>
    </>
  );
};

export default CartWidget;
