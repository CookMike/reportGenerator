import { useContext } from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import SingleReportTable from "./singleReportTable.component";
import ReportContext from "../../context/reportContext";

const Schedule = () => {
  const { allDataForReports } = useContext(ReportContext);

  return (
    <div>
      <br />
      <h1>Schedule </h1>
      <br />
      {Object.keys(allDataForReports).map((employee) => (
        <div key={employee}>
          <SingleReportTable employee={employee} />;
          <br />
          <ReactHtmlTableToExcel
            table={`${employee}`}
            filename={`${employee}.xls`}
            sheet="tablexls"
            buttonText={`${employee} vykaz ve formatu XLS`}
          />
          <br />
        </div>
      ))}
    </div>
  );
};
export default Schedule;
