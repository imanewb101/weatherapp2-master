import React, {useContext} from 'react'; 
import {StyleSheet, FlatList, View, SafeAreaView} from 'react-native'; 
import { Text, Card, Image } from 'react-native-elements'; 
import moment from 'moment';
import AppContext from '../hooks/AppContext';


const HourlyScreen = () => {
const myContext = useContext(AppContext);
    const returnDay = (day) => {
    //const milliseconds = day * 1000; 
    const dateObject = new Date(day * 1000); 
    const f = new Date(); 


    //const hDF = dateObject.toLocaleString(); 
    console.log(dateObject.getDate()); 
    //console.log(dateObject.getMonth()+ 1); 
    //console.log(dateObject.getDay()); 
    let d; 
    switch(dateObject.getDay()) {
        case 0: 
            d = "Sunday";
            break; 
        case 1: 
            d = "Monday";
            break; 
        case 2: 
            d = "Tuesday";
            break; 
        case 3: 
            d = "Wednesday";
            break; 
        case 4: 
            d = "Thursday";
            break; 
        case 5: 
            d = "Friday";
            break; 
        case 6: 
            d = "Saturday";
            break;     
    }    

    return {
        _d: d
    }; 
    }

    // const returnMonth = (m) => {
    //     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    //     const c = new Date(m);
    //     let month = months[c.getMonth()];
    //     return {
    //         _month: month
    //     }
    // }

    const convertKtoF = (k) => {
        const celsius = k - 273;
        return Math.floor(celsius * (9/5) + 32);
    }

    return(
        <SafeAreaView style={{backgroundColor: '#F09D51'}}>
            <Text style={{paddingTop: 100, paddingHorizontal: 10, color: 'white', fontWeight: 'bold', fontSize: 25}}>
                This week
            </Text>
        <FlatList 
            keyExtractor={d => d.dt.toString()}
            data={myContext.daily}
            style={{
                    paddingTop: 40
                }}
            renderItem={({item}) => {
                return (
                    <View style={styles.container}>
                        <Image 
                            containerStyle={styles.item}
                            source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }} 
                            style={{flexDirection: 'column'}}
                        /> 
                        
                        <View style={{paddingLeft: 50}}>
                            <Text style={{fontWeight: 'bold', color: 'white'}}>
                                {returnDay(item.dt)._d}, {moment.unix(item.dt).format("MMMM Do ")} 
                            </Text>
                            <Text style={{paddingLeft: 20,paddingRight: 20, fontWeight: 'bold', color: 'white'}}>
                                High of {convertKtoF(item.temp.max)}° 
                            </Text>    
                            <Text style={{paddingLeft: 20,paddingRight: 20, color: 'white'}}>
                                Low of {convertKtoF(item.temp.min)}°
                            </Text>  
                        </View>
                    </View>
                );
            }}
        />   
        </SafeAreaView> 
    );
};
/*
<View style={styles.container}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>
                            {returnDay(item.dt)._d} 
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{paddingRight: 20, fontWeight: 'bold', color: 'white'}}>
                                {convertKtoF(item.temp.max)}° 
                            </Text>    
                            <Text style={{paddingRight: 20}}>
                                {convertKtoF(item.temp.min)}°
                            </Text>  
                        </View>
                        
                        <Image 
                            containerStyle={styles.item}
                            source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }} 
                            style={{flexDirection: 'column'}}
                        /> 
                    </View>
                    */

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#F06543', 
        borderWidth: 1,
        paddingTop: 20,
        //justifyContent: 'space-between'
    }, 
    item: {
        padding: 15, 
        width: 100, 
        height: 100
    },  
    title: {
        fontSize: 32, 
    }, 
}); 

export default HourlyScreen; 