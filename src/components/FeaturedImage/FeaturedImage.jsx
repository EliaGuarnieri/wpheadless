import { shimmer, toBase64 } from 'lib/util'

import Image from 'next/image'

const FeaturedImage = (props) => {
  const src = props.src ? props.src : `https://via.placeholder.com/${props.width}x${props.height}`
  return (
    <div className={props.className}>
      <Image
        {...props}
        src={src}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(976, 549))}`}
        priority
      />
    </div>
  )
}

export default FeaturedImage