import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CategoriesCard from '../components/CategoriesCard'


const data = [
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



export default function SingleCategoryScreen() {
    return (
        <View style={styles.cardContainer}>

            <View>
                <FlatList
                    data={data}
                    style={styles.cardBody}
                    numColumns={2}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item, index }) => {

                        return (
                            <CategoriesCard data={item}
                            />
                        )
                    }}
                />


            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {

        padding: 5,
        marginTop: 10
    },
    cardHeader: {
        borderBottomWidth: .4,
        borderBottomColor: "#c5c6c7",
        padding: 5,
        marginBottom: 3
    },
    cardHeaderText: {
        fontSize: 18
    },
    cardBody: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    cardFooter: {
        marginTop: 5,
        borderTopWidth: .4,
        borderTopColor: "#c5c6c7",
        padding: 5
    },
    cardFooterButton: {
        backgroundColor: '#00709e',
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        borderRadius: 12,
        flexDirection: 'row'

    },
    cardFooterButtonText: {
        color: '#fff',
        fontSize: 14,
        marginTop: -4

    }
})