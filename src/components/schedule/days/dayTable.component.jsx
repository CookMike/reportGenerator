import React, { useContext } from "react";

import "../reportTable.styles.scss";

import ReportContext from "../../../context/reportContext";
import SideTableInfo from "./sideTableInfo.component";

const DayTable = () => {
  const {
    matchedValues,
    findEmployee,
    jsDate,
    facilityName,
    codeFinal,
    managerName,
    allEmployees,
  } = useContext(ReportContext);

  const getArrayofDaysInReportedMonth = (jsDate) => {
    const reportedMonth = jsDate.getMonth() + 1;
    const numberOfDaysInReportedMonth = new Date(
      jsDate.getFullYear(),
      jsDate.getMonth(),
      0
    ).getDate();

    const daysForReport = new Array(numberOfDaysInReportedMonth)
      .fill(1)
      .map((day, index) => {
        const days = day + index;
        const dateDay = days.toString().concat("." + reportedMonth);

        return dateDay;
      });
    return daysForReport;
  };
  const datesForReportedMonth = getArrayofDaysInReportedMonth(jsDate);

  const weekDaysForReport = (daysForReport, date) => {
    const weekDays = daysForReport.map((day) => {
      switch (
        new Date(
          `${date.getFullYear()}.${day.split(".").reverse()}`.split(".")
        ).getDay()
      ) {
        case 0:
          day = "Neděle";
          break;
        case 1:
          day = "Pondělí";
          break;
        case 2:
          day = "Úterý";
          break;
        case 3:
          day = "Středa";
          break;
        case 4:
          day = "Čtvrtek";
          break;
        case 5:
          day = "Pátek";
          break;
        case 6:
          day = "Sobota";
          break;
        default:
          day = "No such day";
      }
      return day;
    });

    return weekDays;
  };
  const weekDaysInReportedMonth = weekDaysForReport(
    datesForReportedMonth,
    jsDate
  );

  return (
    <React.Fragment>
      <td className="column0 style21 f">1/5</td>
      <td className="column1 style20 f">Monday</td>
      <td className="column2 style24 s">oD</td>
      <td className="column3 style8 s">dD</td>
      <td className="column4 style7 s">oN</td>
      <td className="column5 style8 s">dN</td>
      <td className="column6 style112 s style113" colSpan="2">
        pracov.
      </td>
      <td className="column8 style13 s">D</td>
      <td className="column9 style14 s">N</td>
      <td className="column10 style14 s">SOB</td>
      <td className="column11 style14 s">NED</td>
      <td className="column12 style15 s">sv.</td>
      <td className="column13 style114 s style115" colSpan="2">
        celk.
      </td>
    </React.Fragment>
  );
};
export default DayTable;
