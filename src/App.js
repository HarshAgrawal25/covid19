import { FormControl, MenuItem, Select} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './App.css';


function App() {


  const [countries, setCountries]  =  useState([]);
  const [country,setCountry] = useState('worldwide');


  useEffect(() => {
    const getCountriesData = async() =>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) =>({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
      })
    };
    getCountriesData();

  }, []);

  const onCountryChange = async(event) => {
    const countryCode= event.target.value;

    console.log('YOOO',countryCode);

    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app_dropdown">
            <Select variant="outlined"  onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">WorldWide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
              {/* <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Option two</MenuItem>
              <MenuItem value="worldwide">Option 3</MenuItem>
              <MenuItem value="worldwide">YOOOOO</MenuItem> */}

            </Select>
        </FormControl>
      </div>
      

      {/* Header */}
      {/*Title*/}

      {/*infobox*/}
      {/*infobox*/}
      {/*infobox*/}

      <div className="app__stats">
                
      </div>

      {/*Table*/}
      {/*Graph*/}

      {/*Map*/}

    </div>
  );
}

export default App;
