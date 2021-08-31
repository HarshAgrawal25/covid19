import { FormControl, MenuItem, Select} from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID 19 TRACKER</h1>
        <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              value="abc"
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Option two</MenuItem>
              <MenuItem value="worldwide">Option 3</MenuItem>
              <MenuItem value="worldwide">YOOOOO</MenuItem>

            </Select>
        </FormControl>
      </div>
      

      {/* Header */}
      {/*Title*/}

      {/*infobox*/}
      {/*infobox*/}
      {/*infobox*/}

      {/*Table*/}
      {/*Graph*/}

      {/*Map*/}

    </div>
  );
}

export default App;
