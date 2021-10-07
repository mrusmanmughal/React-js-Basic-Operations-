import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  const [state, setstate] = useState("lahore");
  const [city, setCity] = useState();
  const handleChange = (e) => {
    setstate(e.target.value);
  };

  // use Effect
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=03be01d6f07226fdc81553fab5ea9e33`;
      const responce = await fetch(url);
      const resJson = await responce.json();
      setCity(resJson.main);
      console.log(resJson.main);
    };
    fetchApi();
  }, [state]);
  return (
    <>
      <div className="container mt-5 p-5">
        <h1>Weather app </h1>

        <input
          type="search"
          placeholder=" Search City"
          className="ps-4 form-control"
          onChange={(e) => handleChange(e)}
        />
        {!city ? (
          <p className="mt-4 h1 text-center"> ! No Data Found</p>
        ) : (
          <div>
            <div className="m-4 text-center">
              <i class="bi bi-geo h1"></i>{" "}
              <span className="h2 text-uppercase">{state}</span>
              <h2 className=" my-4"> {city.temp} °Cel</h2>
              <div className="row border">
                <div className="col">
                  <h6> min :{city.temp_min} °C</h6>
                </div>
                <div className="col">
                  <h6>max : {city.temp_max} °C</h6>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
