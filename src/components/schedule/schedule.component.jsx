import { useContext } from "react";

import ReportTable from "../schedule/reportTable.component";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

import ReportContext from "../../context/reportContext";
const Schedule = () => {
  const { allDataForReports } = useContext(ReportContext);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Schedule </h1>
      <br />
      <br />
      <br />
      {Object.keys(allDataForReports).map((employee) => (
        <div key={employee}>
          <ReportTable employee={employee} />
          <br />
          <br />
          <br />
          <ReactHtmlTableToExcel
            table={`${employee}+${employee}`}
            filename="tablexls"
            sheet="tablexls"
            buttonText={`${employee} vykaz ve formatu XLS`}
          />
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
export default Schedule;
