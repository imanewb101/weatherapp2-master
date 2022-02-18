import React, {useContext} from 'react'; 
import { View, StyleSheet, ImageBackground} from 'react-native'; 
import AppContext from '../hooks/AppContext';
import {Card, Image, Text, Icon} from 'react-native-elements'; 
import moment from 'moment';
import night2 from '../../assets/night2.png'; 
import DailyCard from '../components/DailyCard';

const CurrentCard = () => {
    const data = useContext(AppContext);

    const convertKtoF = (k) => {
        const celsius = k - 273; 
        return Math.floor(celsius * (9/5) + 32);
    }

    return (
        <View style={styles.cardCon}>
            <Image 
                containerStyle={styles.cardImage}
                source={{ uri: `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png` }} 
                width='200'
                height='400'
            /> 
            <Text>
            {data.current.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
            </Text>
            <Text style={styles.temp}>{convertKtoF(data.current.temp)}°</Text>

            <View style={{
                paddingVertical: 15,
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                
                <Icon name="wind" type="font-awesome-5" 
                
                />

                <Text style={{paddingLeft: 12, paddingRight: 12}}>{Math.round(data.current.wind_speed)} M/S</Text>
                <Icon name="droplet" type="feather" style
                
                />   
                <Text style={{paddingLeft: 10}}>{Math.round(data.current.wind_speed)} M/S</Text>  
                 
            </View>
        </View>
    );
}

const CurrentScreen = () => {

    return (
        <View style={styles.container}>
            {/* /  */}

                {/* <Text style={styles.title}>Time: {moment.unix(data.current.dt).format('h:mm A')}</Text>
                <Text style={styles.title}>Temp: {convertKtoF(data.current.temp)}°</Text>
                <Text style={styles.title}>Feels like: {convertKtoF(data.current.feels_like)}°</Text>
                <Text style={styles.title}>Humidity: {Math.round(data.current.humidity)}%</Text>
                <Text style={styles.title}>Wind S: {Math.round(data.current.wind_speed)} mph</Text>
                <Text style={styles.title}>Rise: {moment.unix(data.current.sunrise).format('h:mm A')}</Text>
                <Text style={styles.title}>Set: {moment.unix(data.current.sunset).format('h:mm A')}</Text> */}
                <CurrentCard />
                <DailyCard />
            {/* </ImageBackground> */}
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        //alignItems: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#F09D51'
    }, 
    cardCon: {
        paddingTop: 200,
        flex: 1, 
        //alignItems: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#F09D51'
    },
    item: {
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
    }, 
    temp: {
        fontSize: 75,
        color: 'white'
    }, 
    image: {
        flex: 1, 
        justifyContent: "center"
    }, 
    cardImage: { 
        paddingTop: 100,
        resizeMode: "contain",
        height: 400,
        width: 400
    }
}); 


export default CurrentScreen; 