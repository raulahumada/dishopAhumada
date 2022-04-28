import React from 'react';
import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  Button,
  Center,
} from '@chakra-ui/react';

const Item = ({ product }) => {
  return (
    <Flex py={10} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderWidth="1px"
        rounded="lg"
        maxW={'sm'}
        shadow="lg"
        position="relative"
      >
        <Image
          minW={'sm'}
          src={product.pictureURL}
          alt={`Picture of ${product.title} `}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {product.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Nuevo
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {product.title}
            </Box>
          </Flex>
          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.700', 'gray.400')}
          >
            {product.description}
          </Text>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="3xxl">
                ${' '}
              </Box>
              {product.price}
            </Box>
          </Flex>
          <Box>
            <Center>
              <Button
                mt={10}
                w={'full'}
                bg={'cyan.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                _hover={{
                  bg: 'cyan.500',
                }}
                _focus={{
                  bg: 'cyan.500',
                }}
              >
                Ver Detalle
              </Button>
            </Center>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Item;
