import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',       // Beyaz zemin
    borderRadius: 8,               // Yuvarlatılmış köşeler
    borderWidth: 1,                // İnce sınır çizgisi
    borderColor: '#ddd',           // Gri renkli kenarlık
    marginVertical: 10,            // Dikey boşluk
    padding: 15,                   // İç boşluk
    shadowColor: '#000',           // Gölgeli efekt
    shadowOffset: { width: 0, height: 4 },  // Yatay ve dikey gölge
    shadowOpacity: 0.1,            // Hafif gölge
    shadowRadius: 6,               // Yumuşak gölge yayılması
    elevation: 3,                  // Android için gölge efekti
  },
  inner_container: {
    flexDirection: 'row',          // Yatay düzenleme
    justifyContent: 'space-between', // Alanı eşit şekilde dağıt
    marginBottom: 10,              // Alt boşluk
  },
  user: {
    fontSize: 18,                  // Kullanıcı adı boyutu
    fontWeight: 'bold',            // Kalın yazı
    color: '#333',                 // Koyu gri renk
  },
  date: {
    fontSize: 14,                  // Tarih boyutu
    color: '#aaa',                 // Açık gri renk
  },
  text: {
    fontSize: 16,                  // Mesaj metni boyutu
    color: '#333',                 // Koyu gri renk
    marginBottom: 10,              // Alt boşluk
  },
  footer: {
    flexDirection: 'row',          // Yatay düzenleme
    justifyContent: 'space-between', // Alanı eşit şekilde dağıt
    alignItems: 'center',          // Ortalanmış metin
  },
  dislike_container: {
    flexDirection: 'row',          // Yatay düzenleme
    alignItems: 'center',          // Buton metnini ortala
  },
  dislike_count_container: {
    backgroundColor: '#f44336',   // Kırmızı renkli arka plan
    borderRadius: 12,              // Yuvarlatılmış köşeler
    paddingHorizontal: 8,          // Yatay iç boşluk
    paddingVertical: 2,            // Dikey iç boşluk
  },
  dislike_count_text: {
    color: '#fff',                 // Beyaz metin rengi
    fontSize: 14,                  // Sayı boyutu
    fontWeight: 'bold',            // Kalın yazı
  },
  dislike_text: {
    color: '#f44336',              // Kırmızı metin rengi
    fontSize: 16,                  // Yazı boyutu
    marginLeft: 5,                 // Soldan boşluk
  },
});

export default styles;
