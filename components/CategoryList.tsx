import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

interface ListProps {
    category: {
        title: string,
        image: string,
        id: number
    }
    navigation: {
        navigate: Function
    }
}

export default function CategoryList({ category, navigation }: ListProps) {
    return (
        <Pressable onPress={() => navigation.navigate("Category")}
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <View style={{ marginRight: 20 }}>
                <Image source={{ uri: category.image }} style={{ width: 45, aspectRatio: 1.8 / 2, borderRadius: 5 }} />
            </View>
            <Text style={{ fontSize: 18 }}>{category.title}</Text>
        </Pressable>
    )
}
