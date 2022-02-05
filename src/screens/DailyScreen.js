import React, {useContext, useState} from 'react'; 
import { Text, StyleSheet, FlatList} from 'react-native'; 
import moment from 'moment';
import AppContext from '../hooks/AppContext';
import DailyCard from '../components/DailyCard';

const DailyScreen = () => {
    const myContext = useContext(AppContext); 

    return(

        <DailyCard />
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 50
    }, 
    item: {
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
    }, 
    title: {
        fontSize: 32, 
    }, 
}); 

export default DailyScreen; 
