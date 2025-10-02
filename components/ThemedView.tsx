import { View, ViewProps, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';

type ThemedViewProps = ViewProps & {
    style?: ViewProps["style"];
    safe?: boolean
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    if (!safe) return (
        <View style={[{
            backgroundColor: theme.backgroundImage,
        }, style]}
            {...props}
        />
    )

    const insets = useSafeAreaInsets()

    return (
        <View style={[{
            backgroundColor: theme.backgroundImage,
            paddingTop: insets.top + 12,
            paddingBottom: insets.bottom
        }, 
        style]}
            {...props}
        />
    )
}

export default ThemedView