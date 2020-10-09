##  ADR Osobna baza danych dla ubezpieczeń 2020-09-15
### Jaki problem?

Trzeba zdecydować w jaki sposób będą przechowywane dane ubezpieczeń.

### Wybór

Osobna baza danych, tylko do dostępu dla modułu ubezpieczeń. Utrudnia bezpośredni dostęp do danych z poza domeny ubezpieczeń i niejawne powiązania z innymi modułami ("wyciekanie" domeny).

### Alternatywy 

Wydzielony schemat w bazie GlobII

### Skutki 

Powiązania między modułami są jawne. Komunikacja powinna odbywać się przez wydzielone do tego celu API. Wykorzystując ustalone interfejsy/kontrakty zmniejszamy ryzyko przypadkowych błędów w innych modułach przy zmianach wewnętrznej struktury danych. Utrudniamy też omijanie regół biznesowych.