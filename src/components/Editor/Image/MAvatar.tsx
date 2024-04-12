import { Avatar } from "@radix-ui/themes"
import React from 'react'

type Props = {
  src: string
  size: string
  fallback: string
}

const MAvatar = ({ src, size, fallback }: Props) => {
  console.log(size)
  return (
    <Avatar src={src} sizes={size} fallback={fallback} />
  )
}

export default MAvatar