![Logo](my_project/public/logo_kne_mini.png)

# Kids Nature Explorer
Kids Nature Explorer to interaktywna aplikacja mobilna, która zachęca dzieci do odkrywania przyrody i tworzenia własnego dziennika przyrodniczego podczas spacerów. Aplikacja umożliwia dzieciom dokumentowanie swoich obserwacji, uczenie się o różnych gatunkach roślin i zwierząt oraz poznawanie środowisk naturalnych, takich jak lasy i łąki.

# DEMO
https://main--kids-nature-explorer.netlify.app/

# Cel 
Celem aplikacji "Kids Nature Explorer" jest zachęcanie dzieci do aktywnego spędzania czasu na świeżym powietrzu, eksploracji przyrody i odkrywania fascynującego świata natury wokół nich. Dzięki funkcjom takim jak wybieranie środowiska naturalnego, identyfikacja roślin i zwierząt, zadania eksploracyjne oraz edukacyjne wskazówki, aplikacja stymuluje ciekawość i wiedzę dzieci o świecie przyrody. Dodatkowo, możliwość przeglądania historii spacerów umożliwia dzieciom śledzenie i podziwianie swoich wcześniejszych przyrodniczych odkryć, co może dodatkowo zmotywować je do częstszych wypraw na zewnątrz. W ten sposób aplikacja "Kids Nature Explorer" promuje aktywność fizyczną, zdrowy styl życia oraz rozwój zainteresowań przyrodniczych u dzieci.

# Funkcje
- Wybieranie środowiska naturalnego: Przy tworzeniu wpisu, dzieci mogą wybrać, w jakim środowisku naturalnym się znajdują, wybierając spośród obrazków przedstawiających las, łąkę, rzekę i morze.
- Wybieranie roślin i zwierząt z ikonek: Dzieci mogą wybierać konkretne rośliny i zwierzęta z dostępnych ikonek reprezentujących różnorodność gatunkową. Po najechaniu na ikonę rośliny lub zwierzęcia, aplikacja wyświetli podstawowe informacje na ich temat.
- Zadania eksploracyjne: Podczas spacerów aplikacja proponuje dzieciom różnorodne zadania eksploracyjne, takie jak znalezienie określonej rośliny, odgłosu ptaka lub śladów zwierząt. To świetny sposób na rozwijanie umiejętności obserwacyjnych i zdobywanie wiedzy o przyrodzie.
- Edukacyjne wskazówki: Aplikacja zawiera bogate źródło wiedzy na temat przyrody, w tym informacje o różnych gatunkach roślin i zwierząt, ekosystemach, zjawiskach przyrodniczych i wiele więcej. To świetne wsparcie dla dzieci w ich przyrodniczych poszukiwaniach.
- Aplikacja pokazuje nam aktualne miejsce przygody oraz pogodę.
- Przeglądanie historii spacerów: Aplikacja pełni również funkcję dziennika, gdzie dzieci mogą przeglądać swoją historię spacerów, obejrzeć swoje wcześniejsze wpisy i podziwiać swoje przyrodnicze odkrycia.

# Technologie
- React.js with Hooks
- React Context API
- Webpack
- Babel
- Redux
- Supabase 
- Sass

# Instalacja
1. Sklonuj repozytorium:
```sh
https://github.com/zioma6/kids_nature_explorer.git
```
2. Zainstaluj paczki
```sh
npm install
```
3.Skonfiguruj zmienne środowiskowe:
Utwórz plik .env w katalogu głównym projektu i dodaj poniższe zmienne:
```sh
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_KEY=your_supabase_anon_key
REACT_APP_API_KEY_WEATHER=your_openweathermap_api_key
```
4. Uruchom aplikacje
```sh
npm start
```

#Jak używać aplikacji 

Krok 1: Wybierz profil użytkownika
-Uruchom aplikację: Po zainstalowaniu i uruchomieniu aplikacji. Wybierz profil użytkownika, zzostaniesz przeniesiony na stronę główną użytkownika.

Krok 2: Wybór środowiska naturalnego
- Po kliknięciu dodaj przygode: zobaczysz ekran główny z tytułem "W jakim środowisku naturalnym odbywa sie twoja przygoda?". Sprawdź szczegóły środowiska: Po najechaniu na ikonkę środowiska na ekranie pojawią się szczegóły na temat środowiska.
- Wybierz środowisko: Kliknij na ikonę reprezentującą jedno ze środowisk: las, łąkę, morze lub jezioro. Po wybraniu środowiska zostaniesz przeniesiony do ekranu szczegółów tego środowiska. 

Krok 3: Dodawanie szczegółów przygody
- Aktualna pogoda: Aplikacja automatycznie pobierze aktualne dane pogodowe dla wybranego środowiska.
- Zadania: W sekcji zadań zobaczysz zadanie do wykonania podczas tej przygody.
- Zwierzęta: W sekcji zwierząt możesz zobaczyć listę zwierząt związanych z wybranym środowiskiem. Klikając na zwierzę, możesz je dodać do swojej przygody.
- Rośliny: W sekcji roślin możesz zobaczyć listę roślin związanych z wybranym środowiskiem. Klikając na roślinę, możesz ją dodać do swojej przygody.
- Dodaj przygodę: Po wybraniu zwierząt, roślin i sprawdzeniu zadania oraz pogody, kliknij przycisk "Dodaj swoją przygodę". Twoja przygoda zostanie zapisana.

Krok 4: Przeglądanie dziennika przygód
- Otwórz dziennik przygód: Wróć do ekranu głównego użytkownika i kliknij na ikonę "Dziennik przygód".
- Przeglądaj przygody: W dzienniku przygód zobaczysz listę wszystkich dodanych przez Ciebie przygód. Kliknij na dowolną przygodę, aby zobaczyć jej szczegóły, takie jak data, pogoda, zwierzęta, rośliny i wykonane zadania.

Krok 5: Zmiana imienia i avatara
- Otwórz ustawienia profilu: W interfejsie aplikacji znajdź sekcję ustawień profilu (np. przycisk z ikoną użytkownika).
- Zmień imię: W formularzu zmiany imienia wpisz nowe imię. Upewnij się, że imię zawiera tylko litery.
- Zmień avatar: Wybierz nowy avatar z dostępnych opcji.
- Zapisz zmiany: Kliknij przycisk "Zmień Imię i Avatar". Twoje zmiany zostaną zapisane, a nowa nazwa i avatar będą widoczne w aplikacji.

**Autor: Agnieszka Graban**
