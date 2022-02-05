import { Text, Card, Image } from 'react-native-elements'; 
import AppContext from '../hooks/AppContext';
import React, {useContext, useState} from 'react'; 
import { StyleSheet, FlatList, SafeAreaView, View} from 'react-native'; 
import { render } from 'react-dom';


const DailyCard = () => {
    const myContext = useContext(AppContext);
    const returnDay = (day) => {
    //const milliseconds = day * 1000; 
    const dateObject = new Date(day * 1000); 

    //const hDF = dateObject.toLocaleString(); 
    //console.log(dateObject.getDate()); 
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
        _d: d, 
        _date: dateObject.getDate()
    }; 
    
    }

    returnDay(1626436800);
    
    const convertKtoF = (k) => {
        const celsius = k - 273; 
        return Math.floor(celsius * (9/5) + 32);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                horizontal={true}
                keyExtractor={d => d.dt.toString()}
                data={myContext.daily}
                renderItem={({item, index}) => {
                    return (
                        <View>
                            <Text style={styles.container}>
                                {/*Weather: {item.weather[index].main} || 
                                 MinTemp: {convertKtoF(item.temp.min)}|| 
                                MaxTemp: {convertKtoF(item.temp.max)}||  
                                %: {Math.round(item.pop)} || */}
                                {returnDay(item.dt)._d} 
                                {/* Date: {returnDay(item.dt)._date} */}
                            </Text>
                            <Card>
                                <Image 
                                    containerStyle={styles.item}
                                    source={{ uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png` }} 
                                /> 
                                <Text style={{alignItems: 'center'}}>{convertKtoF(item.temp.day)}</Text>
                            </Card>    
                        </View>
                        
                    );
                }}
            /> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: 'center',
        backgroundColor: '#00FF00'
    }, 
    item: {
        width: '50%',
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
    }, 
    title: {
        fontSize: 32, 
    }, 
}); 

export default DailyCard;