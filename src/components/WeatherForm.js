import { useState } from "react";
import style from "../assets/css/weatherForm.module.css";

function WeatherForm({ getCity }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;
    getCity(city);
    setCity("");
  };

  return (
    <div className="mb-sm-5">
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="ciudad"
          autoFocus
          className={style.input}
          value={city}
        />
        <input className={style.submit} type="submit" value="buscar" />
      </form>
    </div>
  );
}

export default WeatherForm;
