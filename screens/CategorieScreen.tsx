import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CategoryList from '../components/CategoryList'

const categories = [
    {
        id: 1,
        title: "Data Mining",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    },
    {
        id: 2,
        title: "Data Protection",
        image: "https://www.e-janco.com/images/Data-Protection-Officer.png"
    },
    {
        id: 3,
        title: "Data Mining",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKpL0PfC5JiuWSgK7VRfsZZ6A_RVX1Ukv6Q&usqp=CAU"
    }
]

export default function CategorieScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ paddingHorizontal: 14 }}>
            <FlatList
                data={categories}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index }) => {

                    return (
                        <CategoryList category={item} navigation={navigation}
                        />
                    )
                }}
            />


        </View>
    )
}
