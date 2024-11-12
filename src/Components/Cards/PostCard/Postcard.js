import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import { useNavigation } from '@react-navigation/native';

import styles from "./PostCard.styles.js";

function PostCard({ message, onLike }) {

    const navigation = useNavigation();
   
    const formattedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr,
    });

    // Beğeni sayısı null veya 0 ise, gösterme
    const likeCount = message.like ? message.like : 0;

    const handleProfileNavigation = () => {
     { // navigation ve username kontrolü
        navigation.navigate("ProfileStack", { screen: "ProfilePage", params: { username: message.username } });

        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>

            <TouchableOpacity onPress={handleProfileNavigation}>
                    <Text style={styles.user}>{message.username}</Text>
                </TouchableOpacity>

                <Text style={styles.date}>{formattedDate}</Text>
            </View>

            {/* Kitapla ilgili bilgiler */}
            <Text style={styles.text}>Kitap Adı: {message.bookTitle}</Text>
            <Text style={styles.text}>Yazar: {message.authorName}</Text>
            <Text style={styles.text}>Tür: {message.bookGenre}</Text>

            {/* Kullanıcının yorumu */}
            <Text style={styles.text}>Yorumum : {message.text}</Text>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.like_container}
                    onPress={() => onLike(message.id)} // Post ID'si ile beğeni işlemi yapılabilir
                >
                    {likeCount > 0 && (
                        <View style={styles.like_count_container}>
                            <Text style={styles.like_count_text}>{likeCount}</Text>
                        </View>
                    )}
                    <Text style={styles.like_text}>Like!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PostCard;
