# 1. Node.js imajını temel alıyoruz (build aşaması)
FROM node:18 AS build

# 2. Çalışma dizinini oluşturuyoruz
WORKDIR /app

# 3. package.json ve package-lock.json dosyalarını kopyalıyoruz
COPY package*.json ./

# 4. Bağımlılıkları yüklüyoruz
RUN npm install

# 5. Uygulamanın kaynak kodlarını konteynıra kopyalıyoruz
COPY . .

# 6. Uygulamayı üretim modunda derliyoruz
RUN npm run build

# 7. Üretim için nginx sunucu kullanıyoruz
FROM nginx:alpine

# 8. Üretim çıktısını nginx'e kopyalıyoruz
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Nginx'in varsayılan portu olan 80'i expose ediyoruz
EXPOSE 80

# 10. Uygulama başlatıldığında nginx'i çalıştırıyoruz
CMD ["nginx", "-g", "daemon off;"]
