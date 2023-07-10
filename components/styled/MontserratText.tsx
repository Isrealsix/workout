import React from "react";
import { Text } from "react-native";

const MontserratText = (props: Text['props']) => {
  return (
    <Text
      {...props}
      style={[props.style,{fontFamily: 'montserrat'}]}
    />
  )
}
export default MontserratText