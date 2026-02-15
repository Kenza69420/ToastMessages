const API_URL = 'https://api.adviceslip.com/advice';

export async function fetchAdvice() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.slip;
}
