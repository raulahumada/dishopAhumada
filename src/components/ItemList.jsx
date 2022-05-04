import { Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import Item from './Item';

const ItemList = (data) => {
  console.log(data);
  return (
    <>
      <Flex direction="column" justifyContent="center" m="0 auto">
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
  );
};

export default ItemList;
