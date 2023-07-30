import { Text, useColorScheme } from 'react-native'
import PressableText, { IPressableProps } from './PressableText';

const PressableThemeText = (props: IPressableProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'light' ? '#000' : '#fff';
  return (
    <PressableText
      {...props}
      style={[props.style, { color }]}
    />
  )
}

export default PressableThemeText;
