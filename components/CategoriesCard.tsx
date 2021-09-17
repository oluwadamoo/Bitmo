import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'


interface DataProps {
    data: {
        title: string,
        image: string
    }
}

export default function CategoriesCard({ data }: DataProps) {
    return (
        <View style={{ borderRadius: 10, elevation: 3, marginBottom: 6, width: Dimensions.get('screen').width / 2 - 10 }}>
            <View>
                <Image source={{
                    uri: data.image
                }} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, alignSelf: 'center', width: Dimensions.get('screen').width / 2 - 16, height: 100 }} />
            </View>
            <View style={{ padding: 8, }}>
                <Text>{data.title}</Text>
            </View>
        </View>
    )
}
