import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';
import FeatureImage from '~/lib/components/samples/FeatureImage';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <FeatureImage />
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;
