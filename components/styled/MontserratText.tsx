import React from "react";
import { Text } from "react-native";

const MontserratText: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Text style={{fontFamily: 'montserrat'}}>
      {children}
    </Text>
  )
}

export default MontserratText