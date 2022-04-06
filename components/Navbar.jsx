import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcHome, FcMenu, FcAbout } from 'react-icons/fc';
// import { BsSearch } from 'react-icons/bs-search';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='grey.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2' >Homes for Hobos</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;