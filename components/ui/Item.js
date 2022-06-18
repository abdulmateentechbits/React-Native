import React from 'react'
import {View, Text, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'


const Item=({title,image,isSelected})=>{
    return (
        <View>
            <Image source={image}/>
            <Text>{title}</Text>
            <Text>{isSelected}</Text>
            <View>
                <Feather name="chevron-right" size={16}/>
            </View>
        </View>
    );
}

export default Item