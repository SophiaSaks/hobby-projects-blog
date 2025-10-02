import { Image, ImageBackground, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'

const Logo = require('../assets/images/logowcagfriendly.png')
const BackgroundLight = require('../assets/images/backgroundLight.png')


const Home = () => {

    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <View style={styles.container}>
            <ImageBackground
                source={BackgroundLight}
                style={styles.background}>

                <Image
                    source={Logo}
                    style={styles.img} />

                <Text>
                    Hobby Projects Blog
                </Text>

            </ImageBackground>

        </View>


    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        marginVertical: 24,
        width: 220,
        height: 220
    },
    background: {
        width: '100%',
        height: '100%'
    }
})