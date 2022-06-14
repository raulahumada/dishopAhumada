import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';

import { collection, getFirestore, addDoc } from 'firebase/firestore';

const Order = () => {
  const { cart, cleanCart } = useCartContext();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState(null);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onEmailConfirmChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const createOrder = async () => {
    console.log('hello');
    setSent(true);
    const userInfo = { name, email, phone };
    console.log(cart);
    const items = cart.map((p) => ({
      id: p.id,
      name: p.description,
      quantity: p.quantityOrder,
      subtotal: p.price * p.quantityOrder,
    }));

    console.log(items);
    const totalPrice = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    console.log(totalPrice);

    const db = getFirestore();

    const newOrder = {
      userInfo,
      items,
      date: Date.now(),
      total: totalPrice,
    };
    console.log(newOrder);
    try {
      const docRef = await addDoc(collection(db, 'orders'), newOrder);

      setOrderId(docRef.id);

      cleanCart();
    } catch (err) {
      console.log(err);
      console.log('Ha ocurrido un error creando la orden de compra');
    }
  };

  if (orderId) {
    return (
      <>
        <Center>
          <Text fontSize={'3xl'}>
            {' '}
            El orden de su compra es{' '}
            <Text fontSize={'4xl'} fontWeight={'bold'}>
              {orderId}
            </Text>{' '}
            <Text>El detalle de la compra sera enviado a {email}</Text>
          </Text>
        </Center>
      </>
    );
  }

  return (
    <>
      <Flex minH={'100vh'} align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Formulario de Compra
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Complete sus datos ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nombre y Apellido</FormLabel>
                    <Input value={name} type="text" onChange={onNameChange} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Telefono</FormLabel>
                    <Input value={phone} onChange={onPhoneChange} type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email </FormLabel>
                <Input value={email} onChange={onEmailChange} type="email" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Confirmar Email </FormLabel>
                <Input
                  value={confirmEmail}
                  onChange={onEmailConfirmChange}
                  type="email"
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  disabled={
                    !name ||
                    !email ||
                    !phone ||
                    !confirmEmail ||
                    confirmEmail !== email ||
                    sent
                  }
                  onClick={createOrder}
                >
                  Finalizar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Order;
