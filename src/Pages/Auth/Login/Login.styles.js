import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        fontSize: 28, // Başlığı daha büyük yapıyoruz
        fontWeight: 'bold', // Kalın yazı
        color: '#AF1740', // Canlı bir renk (Örneğin, mor)
        textAlign: 'center', // Ortaya hizalama
        marginVertical: 20, // Üst ve alt boşluk
        textShadowColor: 'rgba(0, 0, 0, 0.2)', // Gölge rengi
        textShadowOffset: { width: 2, height: 2 }, // Gölgenin konumu
        textShadowRadius: 4, // Gölgenin yayılması
      },
})