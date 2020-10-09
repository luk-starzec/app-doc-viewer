##  ADR Jak decydować czy trzeba generować listy dla podstawowego ubezpieczenia kosztów leczenia 2020-09-15
### Jaki problem?

Aby uniknąć multiplikowania wysyłanych danych o podstawowych ubezpieczeniach kosztów leczenia, trzeba umieć określić jakie ubezpieczenia już zostały wysłane.

### Wybór

Sprawdzanie per produkt w czasie, czy są wygenerowani jacykolwiek ubezpieczeni. Jeżeli dla danego produktu w czasie, istnieje przynajmniej jeden wygenerowany do ubezpieczenia klient, to cały PwC jest pomijany z dalszego sprawdzania/obsługi. 
Listy dla tych ubezpieczeń powinny być generowane tylko raz i w całości (po starcie imprezy, dane powinny być już stabilne). Nie powinno być przypadków, gdy po wygenerowaniu jednej listy, pojawiają się nowi ubezpieczeni i trzeba dosłać ich dane. 

### Alternatywy 

Jawne oznaczanie stosowną flagą produktów w czasie, dla których ubezpieczenia już zostały wygenerowane.
Indywidualne sprawdzanie, czy są klienci/piloci (dla danego produktu w czasie) wymagający, ale jeszcze bez wygenerowanego ubezpieczenia.

### Skutki 

Jeżeli pojawi sie potrzeba ponownego wygenerowania listy dla jakiegoś produktu w czasie, trzeba będzie usunąć wszystkich wcześniej wygenerowanych ubezpieczonych i (zakładając spełnienie pozostałych wymagań) przy kolejnej generacji zostanie stworzona nowa lista.