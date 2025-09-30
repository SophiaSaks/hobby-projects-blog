import { StyleSheet, Text, View } from 'react-native'




const Home = () => {
    return (
        <View style={styles.container}>

                <Text>
                    Sophias testapp
                </Text>
                <Text style={{ marginTop: 12, marginBottom: 30 }}>
                    Får vi se vad detta blir
                </Text>

        </View>
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
        marginVertical: 12,
        width: 200,
        height: 210
    },
    link: {
        borderBottomWidth: 1
    }
})