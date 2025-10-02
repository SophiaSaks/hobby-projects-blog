import ThemedView from '@/components/ThemedView'
import { Image, StyleSheet, Text } from 'react-native'
import Logo from '../assets/images/hobbywcagfriendly.png'


const Home = () => {
    return (
        <ThemedView style={styles.container} >
            <Image 
            source={Logo} 
            style={styles.img}/>

                <Text>
                    Hobby Projects Blog
                </Text>

        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        marginVertical: 24,
        width: 220,
        height: 220
    }
})