import { TextInput, TextInputProps, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

type ThemedTextInputProps = TextInputProps & {
    style?: TextInputProps["style"]
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <TextInput 
        style={[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                margin: 4,
                borderRadius: 6,
                width: '90%',
            }, style
        ]}
        {...props}
        />
  )
}

export default ThemedTextInput