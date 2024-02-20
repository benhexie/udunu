FROM ivangabriele/tauri:debian-bullseye-18

WORKDIR /app

COPY . .

CMD ["yarn", "tauri", "dev"]
