import { Tooltip, Image, Link } from '@chakra-ui/react'

type HelperImageProps = {
  label?: string
  src: string
  extSrc?: string
}

const size = 7

const HelperImage = ({ label, src, extSrc }: HelperImageProps) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
      <Link isExternal rel="noopener noreferrer" href={extSrc}>
        <Image src={src} alt={label} title={label} height={size} width={size} />
      </Link>
    </Tooltip>
  )
}

HelperImage.defaultProps = {
  label: '',
}

export default HelperImage
