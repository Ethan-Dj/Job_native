import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconURL}) => {
  return (
    <TouchableOpacity>
      <Text>Menu</Text>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn