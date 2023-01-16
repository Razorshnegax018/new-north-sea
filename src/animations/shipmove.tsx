import React from "react"
import { View } from 'react-native'
import Video from "react-native-video"

const ShipMoving: React.FC<{}> = () => {
  return (
    <Video
source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
style={{ width: 300, height: 300 }}
controls={true}
/>
  )
}

export default ShipMoving