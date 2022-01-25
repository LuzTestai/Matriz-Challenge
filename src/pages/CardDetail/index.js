import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardDetail from "../../components/CardDetail";
import { vaccinesCountry, historyCountry } from "../../store/actions/countries";

export default () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const { countries, history, vaccines } = useSelector(
    (state) => state.countriesState
  );

  useEffect(() => {
    dispatch(historyCountry(country)).then(() =>
      dispatch(vaccinesCountry(country))
    );
  }, []);

  const calculateCases = () => {
    return (
      (countries[country].All.confirmed * 100000) /
      countries[country].All.population
    );
  };
  return (
    <CardDetail
      lat={countries[country].All.lat}
      long={countries[country].All.long}
      nameCountry={country}
      countryData={countries[country].All}
      calculateCases={calculateCases()}
      history={history.All}
      vaccines={vaccines.All}
    />
  );
};
