import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Button } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useCartContext();

  return cart.length > 0 ? (
    <Link to="/cart">
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
        Carrito ({cart.length})
      </Button>
    </Link>
  ) : null;
};

export default CartWidget;
