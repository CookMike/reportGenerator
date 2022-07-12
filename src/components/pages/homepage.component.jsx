import { useEffect, useContext } from "react";
import { ReportProvider } from "../../context/reportContext";
import Schedule from "../schedule/schedule.component";
import GeneralContext from "../../context/generalContext";
const HomePage = () => {
  const { readDataFromInput, fileUploaded, isFileLoaded } =
    useContext(GeneralContext);

  useEffect(() => {
    isFileLoaded && localStorage.setItem("Schedule", fileUploaded);
  });

  return (
    <div className="homePage">
      <h1>Homepage</h1>
      <br />
      <label>Rozpis</label>
      <br />
      <br />
      <br />
      <br />
      <form>
        <label>Nahraj rozpis</label>
        <input
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={readDataFromInput}
        />
        <button type="submit">Submit</button>
        {isFileLoaded && (
          <ReportProvider>
            <Schedule />
          </ReportProvider>
        )}
      </form>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
