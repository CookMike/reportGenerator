import { useContext } from "react";
import { ReportProvider } from "../../context/reportContext";

import Button, { Typography, InputLabel, Input } from "@mui/material/Button";

import Schedule from "../schedule/schedule.component";
import GeneralContext from "../../context/generalContext";
const HomePage = () => {
  const { readDataFromInput, isFileLoaded } = useContext(GeneralContext);

  return (
    <div className="homePage">
      <h1 className=".MuiTypography-h1">Homepage</h1>
      <br />
      <label>Rozpis</label>
      <br />

      <form>
        <label className=".MuiInputLabel-standard">Nahraj rozpis</label>
        <Button>
          <input
            className=".MuiFilledInput-input"
            type="file"
            accept=".xlsx, .xls, .csv"
            onChange={readDataFromInput}
          />
        </Button>
        {isFileLoaded && (
          <ReportProvider>
            <Schedule />
          </ReportProvider>
        )}
      </form>
      <br />
    </div>
  );
};

export default HomePage;
