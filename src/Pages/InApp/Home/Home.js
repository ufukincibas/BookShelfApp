import React , {useState , useEffect}from "react";
import { Text, View , FlatList } from "react-native";

import styles from "./Home.styles"

import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth"

import FloatingButton from "../../../Components/FloatingButton";
import ContentInputModal from "../../../Components/Modal/ContentInputModal";
import ParseContentData from "../../../Utils/parseContentData";
import PostCard from "../../../Components/Cards/PostCard";


function Home(){
    const [inputModalVisible , setInputModalVisible] = useState(false);
    const [contentList , setContentList] = useState([])

    useEffect( () => {
        database()
        .ref("Messages/")
        .on('value', snapshot => {
            const contentData = snapshot.val();

            console.log("Received content data:", contentData); // Debugging
           const parsedData = ParseContentData(contentData || {});
           setContentList(parsedData)
          }); //realtime changes
    } , [])

 
    function handleInputToggle(){
        setInputModalVisible(!inputModalVisible)
        console.log('Modal görünürlük durumu:', !inputModalVisible); // Kontrol için
    }

    function handleSendContent(content){
        handleInputToggle();
        sendContent(content); // Gönderilen içeriği kontrol et
}

function sendContent(content){

 const userMail = auth().currentUser.email

    const contentObje = {
        text: content.text,             // içerik metni
        bookTitle: content.bookTitle,   // kitap başlığı
        authorName: content.authorName, // yazar adı
        bookGenre : content.bookGenre ,
        username : userMail.split("@")[0]  ,     //@ ten oncesini gonder
       date : (new Date()).toISOString(),
       like : 0
    }
    database().ref("Messages/").push(contentObje) //messages ın altına git push islemi gerceklestir database e yolladı
}

function handleLike (item) {
    database()
        .ref(`Messages/${item.id}/`)
        .update({like: item.like + 1});
}

const renderContent = ({item}) => (  <PostCard message={item} onLike={() => handleLike(item)} />)

    return(
<View style={styles.container}>

        <FlatList 
        data={contentList}
        renderItem={renderContent}
        />

    <FloatingButton iconName='chat-plus-outline' onPress={handleInputToggle}/>
    <ContentInputModal visible={inputModalVisible} 
    onClose={handleInputToggle}
    onSend={handleSendContent}/>
</View>
)
}

export default Home;