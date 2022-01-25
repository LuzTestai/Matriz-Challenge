import axios from "axios";
import {
  FIND_COUNTRIES,
  FIND_COUNTRY_HISTORY,
  FIND_VACCINES_HISTORY,
} from "../constants";

const receivedCountries = (countries) => ({
  type: FIND_COUNTRIES,
  countries,
});

const resultHistoryCountry = (history) => ({
  type: FIND_COUNTRY_HISTORY,
  history,
});

const resultVaccinesCountry = (vaccines) => ({
  type: FIND_VACCINES_HISTORY,
  vaccines,
});

export const casesCountries = () => (dispatch) =>
  axios
    .get(`https://covid-api.mmediagroup.fr/v1/cases`)
    .then((res) => res.data)
    .then((countries) => dispatch(receivedCountries(countries)));

export const historyCountry = (country) => (dispatch) =>
  axios
    .get(
      `https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=deaths`
    )
    .then((res) => res.data)
    .then((history) => dispatch(resultHistoryCountry(history)));

export const vaccinesCountry = (country) => (dispatch) =>
  axios
    .get(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`)
    .then((res) => res.data)
    .then((vaccines) => dispatch(resultVaccinesCountry(vaccines)));
