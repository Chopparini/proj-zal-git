# Projekt Zaliczeniowy
Repozytorium ćwiczeń wykonanych na zaliczenie laboratorium z przedmiotu Narzędzia do automatyzacji budowy oprogramowania

## Wymagania
- Python 3.8 lub nowszy
- pip (menedżer pakietów Pythona)
- (Opcjonalnie) virtualenv do tworzenia środowiska wirtualnego
## Instalacja

### Klonowanie repozytorium
    ```bash
    git clone https://github.com/Chopparini/proj-zal-git
    cd proj-zal-git
    ```

### Instalacja zależności
    ```
    pip install -r requirements.txt
    ```

### Użycie 
    ```
    uvicorn main:app --reload
    ```
### Walidacja hasła

Dodano funkcję `validatePassword(password)`, która sprawdza, czy hasło spełnia wymagania:

- min. 8 znaków
- przynajmniej jedna wielka litera
- przynajmniej jedna cyfra
- przynajmniej jeden znak specjalny


## Autorzy
- Paulina Piotrowska – [GitHub](https://github.com/Chopparini)

## Licencja
Ten projekt jest licencjonowany pod [licencją MIT]( https://pl.wikipedia.org/wiki/Licencja_MIT).