from fastapi import FastAPI
import asyncio
from src.services.nbp import get_rate

app = FastAPI()


@app.get("/")
async def root():
    """
    Zwraca dzisiejszy kurs USD i EUR wg tabeli A NBP.
    """
    usd_rate, eur_rate = await asyncio.gather(
        get_rate("USD"),
        get_rate("EUR")
    )
    return {
        "USD": usd_rate,
        "EUR": eur_rate
    }
