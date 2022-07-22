import React, { useContext } from "react";
import ReportContext from "../../../context/reportContext";

import SideTableInfo from "./sideTableInfo.component";
import DayTable from "./dayTable.component";

const ReportDaysTable = ({ employee }) => {
  const { allDataForReports } = useContext(ReportContext);
  const daysArray = Array.from(
    allDataForReports[employee].shiftsInReportedMonth
  );
  return (
    <React.Fragment>
      {daysArray.map((_, index) => {
        return (
          <tr className={`row${14 + index}`} key={index}>
            <DayTable
              dayData={allDataForReports[employee].shiftsInReportedMonth.get(
                index
              )}
            />
            {index % 2 === 0 && <SideTableInfo index={index} />}
          </tr>
        );
      })}
    </React.Fragment>
  );
};
export default ReportDaysTable;
