import { Flex, Image } from '@chakra-ui/react'

const FeatureImage = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="150px"
        src={`/feature-image.jpg`}
        alt="Hanish Rao"
      />
    </Flex>
  )
}

export default FeatureImage
