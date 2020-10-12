##  ADR Serwis zapisujący pliki ubezpieczeń korzysta z gRPC [2020-10-09]
### Jaki problem?

Serwis wysyłający pliki i ich dane do bazy jest wydzielonym komponentem. Trzeba wybrać technologię komunikacji z innymi elementami systemu.

### Wybór

gRPC. Jednoznacznie definiowane kontrakty ułatwiają integrację i porządkują format przesyłanych danych. Spodziewamy się wymiany dużych paczek danych, z czym ta technologia powinna sobie dość dobrze radzić. Łatwo używać w połączeniu z .NET

### Alternatywy 

REST

### Skutki 

Aplikacje klienckie muszą umieć komunikować się przez gRPC. Konieczność synchronizowania zmian kontraktów (pliki .proto) między serwisem a klientami