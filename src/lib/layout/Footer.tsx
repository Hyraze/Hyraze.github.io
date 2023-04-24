import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="https://hanishrao.me" isExternal rel="noopener noreferrer">
          hanishrao.me
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
