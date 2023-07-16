import { Text, Pressable, PressableProps } from "react-native";

interface IProps extends PressableProps {
  text: string
}
const PressableText: React.FC<IProps> = (props) => {
  return (
    <Pressable
      {...props}
    >
      <Text style={{textDecorationLine: 'underline'}}>
        {props.text}
      </Text>
    </Pressable>
  )
}

export default PressableText