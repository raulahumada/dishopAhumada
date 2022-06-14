import { Center, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const ItemList = (data) => {
  return data.products && data.products.length > 0 ? (
    <>
      <Flex marginTop={'50'} justifyContent="center" m="0 auto">
        <Grid
          w="full"
          gridGap="4"
          templateColumns="repeat(4, 1fr)"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
          gap={4}
        >
          {data.products.map((item) => (
            <Item key={item.id} product={item} />
          ))}
        </Grid>
      </Flex>
    </>
  ) : (
    <Center py={'5%'}>
      <Text fontSize={'4xl'}>No hay productos de esta categoria 😔</Text>
    </Center>
  );
};

export default ItemList;
