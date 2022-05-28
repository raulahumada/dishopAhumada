import { Box, Button, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeItem, calculateTotalPrice } = useCartContext();

  return cart.length === 0 ? (
    <>
      <Center py={'10'}>
        <Text fontSize={'6xl'}>No hay productos en el carrito 😔 </Text>
      </Center>
      <Center>
        <Link to="/">
          <Button
            rounded={'none'}
            w={'lg'}
            mt={8}
            backgroundColor={'cyan.500'}
            size={'md'}
            py={'7'}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            <Text fontSize={'3xl'}>Volver al Inicio ◀</Text>
          </Button>
        </Link>
      </Center>
    </>
  ) : (
    <>
      <Box>
        {cart.map((item) => (
          <Center my={'10'} key={item.id} py={'10'} backgroundColor="gray.700">
            <Box>
              <Text fontSize={'4xl'} color="white">
                {item.quantityOrder} x {item.title} - $
                {item.price * item.quantityOrder} ARS
                <Center>
                  <Text fontSize={'3xl'}>({item.price} C/U) </Text>
                </Center>
              </Text>
            </Box>
            <Button mx={'10'}>
              <Text onClick={() => removeItem(item.id)}>Eliminar ❌ </Text>
            </Button>
          </Center>
        ))}
      </Box>
      <Box>
        <Center>
          <Text fontWeight={'bold'} fontSize={'4xl'}>
            El precio total es: ${calculateTotalPrice()} ARS ✅
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Cart;
