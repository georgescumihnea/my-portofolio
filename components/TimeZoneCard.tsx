"use client";

import React, { useEffect, useState } from "react";
import { CardHeader, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function TimeZoneCard() {
  const [dateTime, setDateTime] = useState("");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    // Function to update the date and time
    const updateDateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Europe/Bucharest",
      };
      const formattedDate = new Intl.DateTimeFormat("en", options).format(date);
      setDateTime(formattedDate);
    };

    // Update immediately
    updateDateTime();

    // Update every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to fetch weather data from Open-Meteo
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=44.4268&longitude=26.1025&current_weather=true"
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    // Fetch weather data on component mount
    fetchWeather();

    // Optionally, you can set an interval to update weather periodically
    // const intervalId = setInterval(fetchWeather, 600000); // Update every 10 minutes

    // Cleanup on component unmount
    // return () => clearInterval(intervalId);
  }, []);

  // Function to get icon path based on weather code
  const getWeatherIcon = (weatherCode: number): string => {
    // Mapping weather codes to your custom SVGs
    if (weatherCode === 0) {
      return "/clearsky.svg"; // Clear sky
    } else if (weatherCode === 1 || weatherCode === 2) {
      return "/mainlyclear.svg"; // Mainly clear, Partly cloudy
    } else if (weatherCode === 3) {
      return "/fog.svg"; // Overcast
    } else if (weatherCode === 45 || weatherCode === 48) {
      return "/fog.svg"; // Fog
    } else if (
      weatherCode === 51 ||
      weatherCode === 53 ||
      weatherCode === 55 ||
      weatherCode === 56 ||
      weatherCode === 57
    ) {
      return "/drizzle.svg"; // Drizzle, Freezing Drizzle
    } else if (
      weatherCode === 61 ||
      weatherCode === 63 ||
      weatherCode === 65 ||
      weatherCode === 66 ||
      weatherCode === 67
    ) {
      return "/rain.svg"; // Rain, Freezing Rain
    } else if (
      weatherCode === 71 ||
      weatherCode === 73 ||
      weatherCode === 75 ||
      weatherCode === 77 ||
      weatherCode === 85 ||
      weatherCode === 86
    ) {
      return "/snow.svg"; // Snow fall, Snow grains, Snow showers
    } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
      return "/thunderstorm.svg"; // Thunderstorm
    } else {
      // For the rest, use the existing icons
      if (weatherCode >= 80 && weatherCode <= 82) {
        return "🌧️"; // Rain showers
      } else {
        return "🌄"; // Default icon
      }
    }
  };

  // Function to get weather description from weather code
  const getWeatherDescription = (weatherCode: number): string => {
    // Descriptions from Open-Meteo documentation
    switch (weatherCode) {
      case 0:
        return "Clear sky";
      case 1:
        return "Mainly clear";
      case 2:
        return "Partly cloudy";
      case 3:
        return "Overcast";
      case 45:
      case 48:
        return "Fog";
      case 51:
      case 53:
      case 55:
        return "Drizzle";
      case 56:
      case 57:
        return "Freezing Drizzle";
      case 61:
      case 63:
      case 65:
        return "Rain";
      case 66:
      case 67:
        return "Freezing Rain";
      case 71:
      case 73:
      case 75:
        return "Snow fall";
      case 77:
        return "Snow grains";
      case 80:
      case 81:
      case 82:
        return "Rain showers";
      case 85:
      case 86:
        return "Snow showers";
      case 95:
        return "Thunderstorm";
      case 96:
      case 99:
        return "Thunderstorm with hail";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <CardHeader>
        <h2 className="text-xl font-bold">Time & Weather</h2>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-2xl font-semibold">{dateTime}</p>
        <p className="flex items-center text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          Bucharest, Romania
        </p>
        {weather && (
          <div className="flex items-center space-x-2">
            <Image
              src={getWeatherIcon(weather.weathercode)}
              alt={getWeatherDescription(weather.weathercode)}
              width={50}
              height={50}
            />
            <p className="text-lg">
              {Math.round(weather.temperature)}°C,{" "}
              {getWeatherDescription(weather.weathercode)}
            </p>
          </div>
        )}
      </CardContent>
    </>
  );
}
