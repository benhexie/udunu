FROM ivangabriele/tauri:debian-bullseye-18

WORKDIR /app

COPY . .

CMD if [ "$NODE_ENV" = "production" ]; \
    then \
        yarn tauri build; \
    else \
        yarn tauri dev; \
    fi
