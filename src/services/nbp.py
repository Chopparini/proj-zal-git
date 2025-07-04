import httpx
from fastapi import HTTPException

NBP_URL = (
    "https://api.nbp.pl/api/exchangerates/rates/A/{code}/today/?format=json"
)
TIMEOUT = 5


async def get_rate(code: str) -> float:
    """
    Zwraca kurs średni (mid) wybranej waluty z tabeli A NBP.
    code: 'USD', 'EUR', ...
    """
    async with httpx.AsyncClient(timeout=TIMEOUT) as client:
        resp = await client.get(NBP_URL.format(code=code))

    if resp.status_code != 200:
        raise HTTPException(
            status_code=502,
            detail=f"NBP API error ({resp.status_code}) for {code}"
        )

    data = resp.json()
    try:
        return data["rates"][0]["mid"]
    except (KeyError, IndexError):
        raise HTTPException(
            status_code=502,
            detail=f"Unexpected NBP payload for {code}"
        )
