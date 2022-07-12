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
      <br />
      <br />
      <br />
      {console.log(jsDate)}
      <ReportTable />
      <br />
      <br />
      <br />
      <ReactHtmlTableToExcel
        table="sheet0"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Schedule;
