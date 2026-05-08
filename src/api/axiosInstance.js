import axios from "axios";

// Axios instance oluşturma
export const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

// Yardımcı Fonksiyon: Token'ı her yere (Header + LocalStorage) uygular veya temizler
export const updateApiWithToken = (token) => {
  if (token) {
    // NOT: İstediğin gibi Bearer prefix'i eklemiyoruz
    api.defaults.headers.common["Authorization"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// Uygulama başladığında çalışacak olan doğrulama (Verify) fonksiyonu
export const verifyUser = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    // 1. Token varsa axios header'ına ekle
    api.defaults.headers.common["Authorization"] = token;

    try {
      // 2. /verify endpoint'ine GET isteği at
      const response = await api.get("/verify");
      
      // 3. Başarılıysa User nesnesini dön ve token'ı yenile
      const { token: newToken, ...user } = response.data;
      
      // Token yenileme (LocalStorage ve Header güncellenir)
      updateApiWithToken(newToken);
      
      return user; // Bu objeyi reducer'a dispatch edebilirsin
    } catch (error) {
      // 4. Token geçersizse her şeyi temizle
      updateApiWithToken(null);
      console.error("Token doğrulanamadı, oturum kapatıldı.");
      throw error;
    }
  }
  return null;
};