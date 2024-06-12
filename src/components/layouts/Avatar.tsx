type AvatarProps = {
  src: string
  width?: string
  height?: string
  radius?: string
}

export default function Avatar({
  src,
  width = '16px',
  height = '16px',
  radius = '75px',
}: AvatarProps) {
  return (
    <img
      src={src}
      alt="avatar"
      style={{
        width: width,
        height: height,
        borderRadius: radius,
      }}
    />
  )
}
