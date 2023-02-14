import Loading from "./Loading";
import "../assets/css/weatherCard.css";

function WeatherCard({ weather, loading, show }) {
  if (loading) {
    return <Loading />;
  }

  let url = "";
  let icoURL = "";

  if (show) {
    url = "http://openweathermap.org/img/w/";
    icoURL = url + weather.weather[0].icon + ".png";
  }

  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = fecha.getMonth();
  const día = fecha.getDate();
  const date = `${año}/${mes + 1}/${día}`;

  return (
    <>
      {show ? (
        <div className="card mb-5" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-sm-4 d-flex image-overflow">
              <img
                src="https://images.unsplash.com/photo-1560803263-f4f2452577bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                className="img-fluid rounded-start image"
                alt="..."
              />
            </div>
            <div className="col-sm-8 d-flex align-items-center">
              <div className="card-body text-center">
                <div className="d-flex flex-column align-items-center justify-content-evenly">
                  <h2 className="card-title text-capitalize">{weather.name}</h2>
                  <p className="fs-5">{date}</p>
                </div>
                <div className="d-flex align-items-center justify-content-evenly">
                  <p className="fs-2 temp">
                    {(weather.main.temp - 273.15).toFixed(1)}°C
                  </p>
                  <img className="ico" src={icoURL} alt="..." />
                  <p className="fs-5">{weather.weather[0].description}</p>
                </div>
                <div className="d-flex align-items-center justify-content-evenly">
                  <div className="d-flex flex-column">
                    <p className="fs-6">Temperatura maxima</p>
                    <p className="fs-6 negrita">
                      {(weather.main.temp_max - 273.15).toFixed(1)}°C
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <p className="fs-6">Temperatura mínima</p>
                    <p className="fs-6 negrita">
                      {(weather.main.temp_min - 273.15).toFixed(1)}°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Ciudad no encontrada</h1>
      )}
    </>
  );
}

export default WeatherCard;
