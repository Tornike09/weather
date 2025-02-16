export interface IWeather {
    name: string;
    main: {
        temp_min: number;
        temp_max: number;
        temp: number;
        feels_like: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    dt_txt: string;
}
