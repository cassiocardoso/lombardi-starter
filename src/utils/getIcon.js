import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSnapchatGhost,
  FaTumblr,
} from 'react-icons/fa'

export const getIcon = (platform, size = 20) => {
  switch (platform) {
    case 'Facebook':
      return <FaFacebookF size={size} />
    case 'Instagram':
      return <FaInstagram size={size} />
    case 'Twitter':
      return <FaTwitter size={size} />
    case 'Youtube':
      return <FaYoutube size={size} />
    case 'Snapchat':
      return <FaSnapchatGhost size={size} />
    case 'TikTok':
      return <FaTumblr size={size} />
    default:
      return null
  }
}
