##  ADR Generator plków ubezpieczeń jako osobny projekt [2020-10-09]
### Jaki problem?

Mechanizm generowania treści pliku csv może być elementem konkretnej aplikacji generującej listę ubezpieczeń określonego typu lub re-używalnym komponentem

### Wybór

Wydzielony osobny projekt. Jest to typowa biblioteka narzędziowa. Sam sposób generowania treści jest podobny dla różnych typów ubezpieczeń (nie trzeba powtarzać kodu dla części wspólnych) i jest dość autonomiczny względem całego procesu generowania list ubezpieczonych różnych typów (zmiana logiki tworzenia list zwykle nie będzie wpływać na format plików). 
Zastosowanie paczek nuget jako sposobu użycia w aplikacji klienckiej, rozwiązuje problem wersjonowania wprowadzonych (potencjalnie niekompatybilnych) zmian.

### Alternatywy 

Umieszczenie tej logiki bezpośrednio w aplikacjach generujących listy ubezpieczeń różnych typów.

### Skutki 

Aplikacje klienckie korzystają z logiki generowania treści plików przez import odpowiedniej paczki nuget.