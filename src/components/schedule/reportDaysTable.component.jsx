import { useContext } from "react";
import ReportContext from "../../context/reportContext";
import React from "react";

import SideTableInfo from "./days/sideTableInfo.component";
import DayTable from "./days/dayTable.component";
import "./reportTable.styles.scss";

const ReportDaysTable = (data) => {
  const {
    matchedValues,
    findEmployee,
    jsDate,
    facilityName,
    codeFinal,
    managerName,
    allEmployees,
  } = useContext(ReportContext);

  const {
    Jméno: name,
    Příjmení: surname,
    Úvazek: contractType,
    Pozice: occupation,
  } = data.initials;

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
  const datesForReportedMonth = getArrayofDaysInReportedMonth(jsDate);
  const weekDaysInReportedMonth = weekDaysForReport(
    datesForReportedMonth,
    jsDate
  );
  const allDays = matchedValues(surname);
  const personalDaysInWork = Object.keys(matchedValues(surname)).filter(
    (key) => !key.includes("Příjmení")
  );
  return (
    <React.Fragment>
      {datesForReportedMonth.map((date, index) => (
        <tr className="row14">
          <DayTable
            day={weekDaysInReportedMonth[index]}
            date={date}
            surname={surname}
            allDays={allDays}
            personalDaysInWork={personalDaysInWork}
          />
          {index % 2 !== 1 && <SideTableInfo />}
        </tr>
      ))}
    </React.Fragment>
  );
};
export default ReportDaysTable;
