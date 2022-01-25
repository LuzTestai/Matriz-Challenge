import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { casesCountries } from "../../store/actions/countries";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./style";

export default (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesState.countries);

  const [filterCountries, setFilterCountries] = useState([]);
  const [countriesAll, setCountriesAll] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  useEffect(() => dispatch(casesCountries()), []);

  const mapInObject = (obj) => {
    for (const i in obj) {
      countriesAll.push(`${i}`);
      filterCountries.push(`${i}`);
    }
  };
  mapInObject(countries);

  const handleListItemClick = (country) => {
    navigate(`/detail/${country}`);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchTextClick = () => {
    let arrCountriesFilter = [];
    if (searchText === "Todos" || "") {
      setFilterCountries(countriesAll);
    } else {
      for (const i in countries) {
        if (countries[i].All.continent === searchText) {
          arrCountriesFilter.push(countries[i].All.country);
        }
      }
    }
    setFilterCountries(arrCountriesFilter);
  };

  return (
    <Container className={classes.container}>
      <Grid container className={classes.titleGridContainer}>
        <Grid className={classes.gridRow}>
          <Typography className={classes.title}>COVID por el Mundo!</Typography>
        </Grid>

        <div className={classes.gridRow}>
          <TextField
            className={classes.TextFieldSearch}
            value={searchText}
            placeholder="Buscar por continente.."
            onChange={handleSearchTextChange}
          />

          <Button
            className={classes.searchButton}
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </div>
      </Grid>

      <Box
        sx={{
          width: "90%",
          bgcolor: "background.paper",
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          {filterCountries.length > 0 &&
            filterCountries.map((countrie, index) => {
              return (
                <ListItemButton
                  key={index}
                  selected={selectedIndex === 0}
                  onClick={() => handleListItemClick(countrie)}
                >
                  <ListItemIcon>
                    <LocationOnIcon fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary={countrie} />
                </ListItemButton>
              );
            })}
        </List>
      </Box>
    </Container>
  );
};
