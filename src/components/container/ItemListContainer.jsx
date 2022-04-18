import { Center } from '@chakra-ui/react';
import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div>
      <Center>{props.text}</Center>
    </div>
  );
};

export default ItemListContainer;
