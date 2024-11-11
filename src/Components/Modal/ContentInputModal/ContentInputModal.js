import React, { useState } from "react";
import { View , TextInput ,Text} from "react-native";

import styles from "./ContentInputModal.styles"
import Button from "../../Button";
import Modal from "react-native-modal";


function ContentInputModal({visible ,onClose, onSend}) {
    
    const [text , setText] = useState(null);
    const [authorName , setAuthorName] = useState(null);
    const [bookTitle , setBookTitle] = useState(null);
    const [bookGenre , setBookGenre] = useState(null)

function handleSend(){
    if (!text || !bookTitle || !authorName || !bookGenre) {
        return;
    } 
    onSend({ text, bookTitle, authorName , bookGenre });
    setText(null);
    setBookTitle(null);
    setAuthorName(null);
    setBookGenre(null);

}
    return(
        <Modal  style={styles.modal}
         isVisible={visible} 
        onSwipeComplete={onClose} //asagı suruklemeyi bıraktıgında
        onBackdropPress={onClose}//arka plana tıkladıgında 
        swipeDirection="down"
        >
        <View style={styles.container}>
            <View style={styles.input_container}>
                <Text>Fikrini Paylaş!</Text>
        
            <TextInput 
            placeholder="Kitap adı..." 
            onChangeText={setBookTitle}
            multiline //sona gelince asagı ınmesi
            />
            <TextInput 
            placeholder="Kitap Türü..." 
            onChangeText={setBookGenre}
            multiline //sona gelince asagı ınmesi
            />
            <TextInput 
            placeholder="Yazar Adı..." 
            onChangeText={setAuthorName}
            multiline //sona gelince asagı ınmesi
            />
                <TextInput 
            placeholder="Kitap hakkındaki yorumum..." 
            onChangeText={setText}
            multiline //sona gelince asagı ınmesi
            />
            
            </View>
            <Button title="Gönder" onPress={ handleSend}
                // onsend text i gonderiyor diger tarafa
                />
        </View>
        </Modal>
    )
}

export default ContentInputModal;