import { useContext } from "react";

import ReportTable from "../schedule/reportTable.component";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

import GeneralContext from "../../context/generalContext";
import ReportContext from "../../context/reportContext";
const Schedule = () => {
  const { fileUploaded } = useContext(GeneralContext);
  const {
    scheduleValues,
    matchedValues,
    findEmployee,
    jsDate,
    facilityName,
    codeFinal,
    managerName,
    allEmployees,
  } = useContext(ReportContext);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Schedule </h1>
      {console.log(allEmployees[0]["Příjmení"])}
      <br />
      <br />
      <br />
      {console.log(jsDate)}
      {allEmployees.map((employee) => (
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
      ))}
    </div>
  );
};
export default Schedule;
