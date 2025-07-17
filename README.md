# NativeUtils

React Native ile geliştirilmiş bir mobil uygulama altyapısı. Bu proje, cihazdan konum bilgisi alma, medya seçimi ve izin yönetimi gibi yerel (native) işlevleri modern navigasyon ve UI çözümleri ile birlikte sunar.

## 📱 Platformlar

- iOS
- Android

## 🚀 Başlarken

Aşağıdaki adımları izleyerek projeyi kendi bilgisayarınızda çalıştırabilirsiniz.

### 🔧 Gereksinimler

- Node.js >= 18
- npm veya yarn
- Xcode (iOS için)
- Android Studio (Android için)
- CocoaPods (macOS için, iOS native modülleri gerektirir)

### 🔨 Kurulum

```bash
# Depoyu klonla
git clone https://github.com/kullaniciadi/nativeutils.git
cd nativeutils

# Bağımlılıkları yükle
npm install

# iOS için pod install
cd ios
pod install
cd ..

## 🧩 Kullanılan Başlıca Paketler

react-native-geolocation-service 	Cihazın konumunu hassas şekilde almak için
react-native-image-picker	Kamera ve galeri entegrasyonu
react-native-permissions	Platform bağımlı izin yönetimi
@react-navigation/native	Uygulama içinde gezinme (navigation)
@react-native-async-storage/async-storage	Kalıcı veri saklama (local storage)
react-native-safe-area-context	iPhone çentik ve kenar boşluklarını yönetme


## 📂 Proje Yapısı (Örnek)

nativeutils/
├── android/
├── ios/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   └── utils/
├── App.tsx
├── package.json
└── README.md