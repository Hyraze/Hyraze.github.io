import { Flex, useColorMode } from '@chakra-ui/react';

import HelperImage from './HelperImage';

const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src={`/github-icon-${colorMode}.svg`} label="Hyraze" extSrc="https://github.com/Hyraze"/>
      <HelperImage src="/linkedin-icon.svg" label="hanishrao" extSrc="https://www.linkedin.com/in/hanishrao/" />
      <HelperImage src='/instagram-icon.svg' label='hrao13' extSrc='https://www.instagram.com/hrao13/' />
      <HelperImage src="/telegram-icon.svg" label="hanishrao" extSrc="https://t.me/hanishrao" />
      <HelperImage src="/twitter-icon.svg" label="Hanishrao" extSrc="https://twitter.com/Hanishrao" />
    </Flex>
  );
};

export default SomeImage;
