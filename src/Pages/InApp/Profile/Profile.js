import React from "react";
import {Text , View} from "react-native"

import styles from "./Profile.styles"



function Profile({route}){
    const {username} = route.params;
 return(
    <View>
        <Text>Hello Profile , {username}</Text>
    </View>
 )
}

export default Profile;