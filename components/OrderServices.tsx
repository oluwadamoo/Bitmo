import React from 'react'
import { View, Text } from 'react-native'
import Services from "./Services"
const OrderServices = () => {
    return (
        <View>
            {/* <View> Google Map Here </View> */}
            <View>
            <Services title={"Website and maintenance Designing"} price={"2,500"}/>
            <Services title={"Service Product"} price={"2,500"}/>
            <Services title={"Service Product"} price={"2,500"}/>
            </View>
        </View>
    )
}

export default OrderServices
