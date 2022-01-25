import { useEffect, useState } from "react";
import credential from "../../credential";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Map from "../Map";
import styles from "./style";

export default ({
  countryData,
  calculateCases,
  history,
  nameCountry,
  vaccines,
  lat,
  long,
}) => {
  const classes = styles();
  const mapHistory = useState([]);
  const mapVaccines = useState([]);

  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credential.mapsKey}`;

  const porcentajeVacunados = () => {
    const resultado =
      ((mapVaccines[3] + mapVaccines[4]) * 100) / mapVaccines[5];
    return Math.round(resultado);
  };

  for (const i in history) {
    switch (i) {
      case "population":
        mapHistory.push(` Población : ${history[i]}`);
        break;
      case "sq_km_area":
        mapHistory.push(` Km del Area : ${history[i]}`);
        break;
      case "life_expectancy":
        mapHistory.push(` Expetativa de vida : ${history[i]}`);
        break;
      case "continent ":
        mapHistory.push(`Continente : ${history[i]}`);
        break;
      case "capital_city":
        mapHistory.push(` La capital : ${history[i]}`);
        break;
    }
  }

  for (const i in vaccines) {
    switch (i) {
      case "administered":
        mapVaccines.push(vaccines[i]);
        break;
      case "people_vaccinated":
        mapVaccines.push(vaccines[i]);
        break;
      case "people_partially_vaccinated":
        mapVaccines.push(vaccines[i]);
        break;
      case "population":
        mapVaccines.push(vaccines[i]);
        break;
    }
  }

  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
        width: "100%",
        backgroundColor: "#DCDCDC",
        padding: "20px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          {nameCountry}
        </Typography>
        <div className={classes.mBottom10}>
          <Typography variant="h5" component="div">
            Casos Confirmados: {countryData.confirmed}
          </Typography>
          <Typography variant="h5" component="div">
            Casos Recuperados: {countryData.recovered}
          </Typography>
        </div>
        <div className={classes.mBottom30}>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Cantidad de casos por 100.000 habitantes: {calculateCases}
          </Typography>
        </div>

        <div className={classes.cardHistory}>
          <div className={classes.mBottom10}>
            <Typography variant="h5" component="div" color="white">
              Historial del País
            </Typography>
          </div>

          {mapHistory.length > 2 ? (
            mapHistory.map((info) => {
              return (
                <div className={classes.containerRow}>
                  <Typography variant="body1" color="white">
                    {info}
                  </Typography>
                </div>
              );
            })
          ) : (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}
        </div>

        <div className={classes.cardVaccines}>
          <div className={classes.mBottom10}>
            <Typography variant="h5" component="div" color="white">
              Informacion de Vacunas
            </Typography>
          </div>
          {mapVaccines.length > 2 ? (
            <div>
              <div className={classes.containerRow}>
                <Typography variant="body1" color="white">
                  Vacunas Disponibles : {mapVaccines[2]}
                </Typography>
              </div>

              <div className={classes.containerRow}>
                <Typography variant="body1" color="white">
                  Personas Vacunadas : {mapVaccines[3] + mapVaccines[4]}
                </Typography>
              </div>

              <div className={classes.containerRow}>
                <Typography variant="body1" color="white">
                  Porcentaje de personas Vacunadas :{porcentajeVacunados()}%
                </Typography>
              </div>
            </div>
          ) : (
            <Box sx={{ width: "80%" }}>
              <LinearProgress />
            </Box>
          )}
        </div>

        <div>
          <Map
            lat={lat}
            long={long}
            containerElement={<div style={{ height: "400px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<p>Cargando..</p>}
            googleMapURL={googleMapURL}
          />
        </div>
      </CardContent>
    </Box>
  );
};
