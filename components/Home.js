import * as React from 'react';
import { View, Text, StyleSheet, Image , FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import color from '../assets/colors/color'
import categoriesData from '../assets/data/categoriesData';
import Item from './ui/Item';

function Home() {

    const renderCategoryitem=({item})=>{
        return (
            <Item title={item.title} image={item.image} isSelected={item.selected}/>
        );
    }
    return (
        <View style={styles.container}>
            {/* Header start */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                    <Feather name='menu' size={24} color={color.textDark} />
                </View>
            </SafeAreaView>
            {/* Header End */}
            {/* Title */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>
            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name='search' size={16} color={color.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchTitle}>Search</Text>
                </View>
            </View>
            {/* Categories */}
            <View style={styles.categoryWrapper}>
                <Text style={styles.categoryTitle}>Categories</Text>
                <View style={styles.categoryListWrapper}>
                 <FlatList  
                  data={categoriesData}
                  renderItem={renderCategoryitem}
                  keyExtractor={item=>item.id}
                  horizontal={true}
                 />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        paddingHorizontal: 20,

    },
    headerWrapper: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20

    },
    profileImage: {

        width: 40,
        height: 40,
        borderRadius: 40
    },
    titlesWrapper: {
        marginTop: 30,
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: color.textDark,

    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: color.textDark,
        marginTop: 5
    },
    searchWrapper: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,

    },
    search: {
        flex:1,
        marginLeft:10,
        borderBottomColor:color.textLight,
        borderBottomWidth:3

    },
    searchTitle: {
        fontFamily:'Montserrat-SemiBold',
        fontSize:14,
        marginBottom:5,
        color:color.textLight
    },
    categoryWrapper:{
      marginTop:30
    },
    categoryTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,


    },
    categoryListWrapper:{

    }
});

export default Home;