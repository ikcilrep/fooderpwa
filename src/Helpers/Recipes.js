const axios = require('axios');
const apiAddress = 'https://themealdb.p.rapidapi.com';
async function getRandomMeal() {
    const instance = axios.create({
        baseUrl: apiAddress,
        timeout: 1000,
        headers: {
            "x-rapidapi-host": "themealdb.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "useQueryString": true
        },
    });
    try {
        const response = axios.get('/random.php');
        return response.data;
    } catch (err) {
        throw err;
    }
}
