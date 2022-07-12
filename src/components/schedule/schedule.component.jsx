import { useContext } from "react";

import ReportTable from "../schedule/reportTable.component";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

import ReportContext from "../../context/reportContext";
const Schedule = () => {
  const { arrayOfEmployeesData, allDataForReports } = useContext(ReportContext);

  return (
    <div>
      {console.log(allDataForReports)}
      <br />
      <br />
      <br />
      <h1>Schedule </h1>
      <br />
      <br />
      <br />
      {/* {allEmployees.map((employee) => (
        <div>
          <ReportTable employee={employee} />
          <br />
          <br />
          <br />
          <ReactHtmlTableToExcel
            table={`${employee["Příjmení"]}+${employee["Jméno"]}`}
            filename="tablexls"
            sheet="tablexls"
            buttonText={`${employee["Příjmení"]} vykaz ve formatu XLS`}
          />
          <br />
          <br />
          <br />
        </div>
      ))} */}
    </div>
  );
};
export default Schedule;
