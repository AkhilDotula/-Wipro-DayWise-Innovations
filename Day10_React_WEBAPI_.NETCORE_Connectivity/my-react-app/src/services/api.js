export const fetchWeatherData = async () => {
    try {
        const response = await fetch("http://localhost:5186/weatherforecast");
        if (!response.ok) {
            const errorText = await response.text(); // Get error message
            throw new Error(`HTTP Error ${response.status}: ${errorText}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return []; // Return empty array to prevent crash
    }
};
