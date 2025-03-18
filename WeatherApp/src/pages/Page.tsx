import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Page.css";
import { useState } from "react";

const Page: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather information is not available");
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" class="pageTitle">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large" class="pageTitle">
            WeatherApp
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonSearchbar
              placeholder="City"
              show-clear-button="always"
              value={city}
              onIonInput={(e) => setCity(e.detail.value!)}
            ></IonSearchbar>
            <IonButton expand="full" onClick={() => fetchWeather(city)}>
              Check Weather
            </IonButton>
          </IonToolbar>
        </IonHeader>

        {weatherData && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{weatherData.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="weather-card">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt="weather icon"
              />
              <p
                style={{
                  fontSize: "large",
                  fontWeight: "bold",
                }}
              >
                {weatherData.main.temp.toFixed(1)}°C -{" "}
                {weatherData.weather[0].description}
              </p>
              <p style={{ marginBottom: "20px" }}>
                Feels like: {weatherData.main.feels_like.toFixed(1)}°C
              </p>

              <p className="weather-info">
                Humidity: {weatherData.main.humidity}%
              </p>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Page;
