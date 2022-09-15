# Wykorzystane technologie
1. Maven
2. PostgreSQL
3. Java 17
4. Angular 14

# Uruchomienie aplikacji
1. Postawienie bazy danych i skonfigurowanie połączenia z bazą danych w resources application.yml.
2. Wygenerowanie pliku jar za pomocą polecenia mvn install. Wykonanie polecenia na wygenerowanym pliku (znajduje się w katalogu target) java -jar JobOffersServices. Domyślnie aplikacja uruchamia się na porcie 8080.
3. Uruchomienie frontu z poziomu katalogu gui poleceniem npm start. Domyślnie front uruchamia się na porcie 4200. Domyślny adres: http://localhost:4200.