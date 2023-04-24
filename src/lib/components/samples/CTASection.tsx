import { Box, Button, Flex, Image, Link } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'

const repoLink = 'https://github.com/Hyraze'

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button
          as="a"
          href="https://docs.google.com/document/d/1PfLIBtS_H4p4u0-6NghH5XdV2FDlAvrVgLuogxHYLXw/edit?usp=sharing"
          target="_blank"
          size="sm"
        >
          Download CV
        </Button>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          View Projects
        </Button>
      </Flex>
    </Box>
  )
}

export default CTASection
