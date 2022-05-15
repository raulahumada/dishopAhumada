import { Button, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { productsInfo as products } from '../products';

const ItemCount = ({ stock, onAdd, id }) => {
  console.log(stock, onAdd, id);
  const [count, setCount] = useState(0);

  const { addToCart } = useCartContext();

  console.log(addToCart);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClick = (id, cantidad) => {
    console.log('1');

    const findProduct = products.find((producto) => producto.id === id);

    if (!findProduct) {
      alert('Error en la base de datos');
      return;
    }

    addToCart(findProduct, cantidad);
    onAdd(count);
  };

  return (
    <>
      <div className="flex gap-4 mt-4">
        <Stack direction="row" spacing={4}>
          <Button onClick={handleRemove} colorScheme="blue" variant="solid">
            Disminuir
          </Button>
          <Text> Cantidad: {count}</Text>
          <Button
            onClick={handleAdd}
            marginLeft="2"
            colorScheme="blue"
            variant="solid"
          >
            Agregar
          </Button>
        </Stack>

        <div>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'md'}
            onClick={() => handleClick(id, count)}
            py={'7'}
            textTransform={'uppercase'}
            _hover={{
              boxShadow: 'lg',
            }}
          >
            Agregar al Carrito
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
