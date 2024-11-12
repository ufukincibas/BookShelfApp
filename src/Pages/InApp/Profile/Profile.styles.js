import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontSize: 24,
        fontWeight: "bold",
    },
    bio: {
        fontSize: 14,
        color: "gray",
        textAlign: "center",
    },
    favoriteBooksContainer: {
        flex: 1,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    bookItem: {
        padding: 10,
        backgroundColor: "#eaeaea",
        borderRadius: 5,
        marginBottom: 10,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    bookAuthor: {
        fontSize: 14,
        color: "gray",
    },
})