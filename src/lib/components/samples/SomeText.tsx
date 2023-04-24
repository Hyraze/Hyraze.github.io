import { Flex, Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        Hanish Rao
      </Heading>
      <Flex justifyContent="center" alignItems="center" gap={1}>
      <Text fontSize="lg" >Software Engineer</Text>
      <Text fontSize="sm" as="i">at Vistas Global WLL</Text>
        </Flex>


      <Text fontSize="sm">
        Full Stack Developer | MERN | MEAN | Postgres | AWS
      </Text>
    </Grid>
  );
};

export default SomeText;
