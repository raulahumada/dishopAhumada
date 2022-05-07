import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import CartWidget from './CartWidget';
import logo from '../assets/Logo.png';

const Links = [
  { name: 'Inicio', path: '/' },
  {
    name: 'Celulares',
    path: '/category/celulares',
  },
  {
    name: 'Electrodomesticos',
    path: '/category/electrodomesticos',
  },
  {
    name: 'Computadoras',
    path: '/category/computadoras',
  },
  {
    name: 'Accesorios',
    path: '/category/accesorios',
  },
];

const NavLink = ({ children }) => (
  <Link
    as={LinkRouter}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={children.path}
  >
    {children.name}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href="/">
              <Image
                src={logo}
                _hover={{
                  transform: 'scale(1.1)',
                  cursor: 'pointer',
                }}
                width={100}
              />
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.name}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode} size={'sm'} mr={4}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <CartWidget />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
