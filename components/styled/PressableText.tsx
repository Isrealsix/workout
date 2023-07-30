import { Text, Pressable, PressableProps, StyleProp, TextStyle } from "react-native";

export interface IPressableProps extends PressableProps {
  text: string
  style?: StyleProp<TextStyle>
}
const PressableText: React.FC<IPressableProps> = (props) => {
  return (
    <Pressable
      {...props}
    >
      <Text style={[props.style, {textDecorationLine: 'underline'}]}>
        {props.text}
      </Text>
    </Pressable>
  )
}

export default PressableText