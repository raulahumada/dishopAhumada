import { Button, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Center>
        <Text fontSize={'5xl'} textTransform="uppercase" py="10">
          La dirección a la cual quieres acceder no existe 😥
        </Text>
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
  );
};

export default NotFound;
