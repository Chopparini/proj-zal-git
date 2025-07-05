# Projekt Zaliczeniowy
Repozytorium ćwiczeń wykonanych na zaliczenie laboratorium z przedmiotu Narzędzia do automatyzacji budowy oprogramowania.
To jest prosty projekt aplikacji webowej Node.js, zawierający kalkulator z podstawowymi funkcjami matematycznymi.  
Projekt zawiera pełny workflow CI/CD (Continuous Integration / Continuous Deployment), testy jednostkowe oraz obraz Dockera.

## Funkcjonalność

- Dodawanie: `add(a, b)`
- Mnożenie: `multiply(a, b)`
- Walidacja formularza
- Walidacja numeru telefonu
- Walidacja hasła (przykład TDD)

## Technologia
Technologia

- Node.js 18
- Express
- Docker
- GitHub Actions (CI/CD)
- Jest (testy)

---
## CI/CD – GitHub Actions

Workflow znajduje się w `.github/workflows/ci-cd.yml`. Wykonuje:

1. **Testy jednostkowe** (`npm test`)
2. **Budowanie obrazu Dockera**
3. **Test kontenera** (`curl http://localhost:3000`)

> **Przyszłościowo**: workflow został przygotowany pod wdrożenie do AWS Elastic Beanstalk
---

## Deployment (teoretyczny – AWS EB)

> Docelowo aplikacja będzie wdrażana na **AWS Elastic Beanstalk**.  
> Aktualnie konto jest w trakcie aktywacji, ale pipeline i konfiguracja są gotowe.

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

## Uruchom lokalnie:

        ```bash
        npm install
        npm test
        ```
## Docker
docker build -t moj-projekt .
docker run -p 3000:3000 moj-projekt

### Dodano funkcję `validatePassword(password)`, która sprawdza, czy hasło spełnia wymagania:

- min. 8 znaków
- przynajmniej jedna wielka litera
- przynajmniej jedna cyfra
- przynajmniej jeden znak specjalny


## Autorzy
- Paulina Piotrowska – [GitHub](https://github.com/Chopparini)

## Licencja
Ten projekt jest licencjonowany pod [licencją MIT]( https://pl.wikipedia.org/wiki/Licencja_MIT).