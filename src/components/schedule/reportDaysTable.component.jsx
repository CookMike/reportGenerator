import { useContext } from "react";
import ReportContext from "../../context/reportContext";
import React from "react";

import SideTableInfo from "./days/sideTableInfo.component";
import DayTable from "./days/dayTable.component";
import "./reportTable.styles.scss";

const ReportDaysTable = ({ employee }) => {
  const { jsDate, weekDaysSwitch, allDataForReports } =
    useContext(ReportContext);

  const { shiftsData: shifts } = allDataForReports[employee];

  const weekDays = weekDaysSwitch(jsDate);

  return (
    <React.Fragment>
      {Object.keys(shifts).map((date, index) => (
        <tr className={`row${14 + index}`} key={index}>
          <DayTable dayData={shifts[date]} date={date} day={weekDays[index]} />
          {index % 2 !== 1 && <SideTableInfo />}
        </tr>
      ))}
    </React.Fragment>
  );
};
export default ReportDaysTable;
