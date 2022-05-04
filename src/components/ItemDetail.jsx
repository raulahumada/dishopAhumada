import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';

const ItemDetail = ({ item }) => {
  return (
    <>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={item.pictureURL}
              // fit={'cover'}
              align={'center'}
              // w={'100%'}
              // h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                {item.title}
              </Heading>
              {item.isNew && (
                <Badge
                  my={10}
                  rounded="full"
                  px="2"
                  fontSize="2xl"
                  colorScheme="green"
                >
                  Nuevo
                </Badge>
              )}
              {!item.isNew && (
                <Badge rounded="full" px="2" fontSize="2xl" colorScheme="red">
                  Usado
                </Badge>
              )}
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}
              >
                ${item.price} ARS
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                >
                  {item.description}
                </Text>
              </VStack>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              onClick={() => {
                alert('Esta funcionalidad no esta disponible aún');
              }}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              AÑADIR AL CARRITO
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ItemDetail;
