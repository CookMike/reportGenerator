import { createContext, useContext } from "react";
import GeneralContext from "./generalContext";

const ReportContext = createContext();

export function ReportProvider({ children }) {
  const { fileUploaded } = useContext(GeneralContext);

  const [scheduleValues, schedule, employees] = fileUploaded;

  const finalDataMaker = (object) => {
    const arr = Object.values(object);
    return arr[1];
  };

  const [date, facilityCode, facilityName, managerId, managerName] =
    schedule.value.map((el) => finalDataMaker(el));

  const jsDate = new Date(Math.round((date - 25569) * 86400 * 1000));

  const codeFinal = [facilityCode, "/", managerId].join("");

  const arrayOfEmployeesData = employees.value;

  const keyToDataObject = new Array(arrayOfEmployeesData.length)
    .fill("1")
    .map((el, index) => (el = arrayOfEmployeesData[index]["Příjmení"]));

  const getArrayofDaysInReportedMonth = (jsDate) => {
    const reportedMonth = jsDate.getMonth() + 1;
    const numberOfDaysInReportedMonth = new Date(
      jsDate.getFullYear(),
      jsDate.getMonth() + 1,
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

  const daysInWorkObject = (surname) => {
    const daysInWork = scheduleValues.value.find(
      (row) => row["Příjmení"] === surname
    );
    return daysInWork;
  };

  const monthWithWorkedShifts = (surname) => {
    const daysInWork = daysInWorkObject(surname);
    const dates = getArrayofDaysInReportedMonth(jsDate);
    const checkShift = (string) => {
      const shiftData = {};
      if (string.length > 2) {
        const [start, end] = string.split("-");
        if (start * 1 > 1 * end) {
          shiftData.startDayShift = "";
          shiftData.endDayShift = "";
          shiftData.startNightShift = start;
          shiftData.endNightShift = end;
          shiftData.sum = 24 - start * 1 + end * 1;
        } else if (end * 1 > 1 * start) {
          shiftData.startDayShift = start;
          shiftData.endDayShift = end;
          shiftData.startNightShift = "";
          shiftData.endNightShift = "";
          shiftData.sum = end * 1 - 1 * start;
        } else {
          shiftData.startDayShift = "";
          shiftData.endDayShift = "";
          shiftData.startNightShift = "";
          shiftData.endNightShift = "";
          shiftData.sum = "";
        }
      }
      return shiftData;
    };
    const shiftsData = Object.assign(
      {},
      ...Object.entries({ ...dates }).map(([a, key]) => ({
        [key]: Object.keys(daysInWork).includes(
          `Den${key.substring(0, key.indexOf("."))}`
        )
          ? checkShift(daysInWork[`Den${key.substring(0, key.indexOf("."))}`])
          : " ",
      }))
    );

    return shiftsData;
  };

  const employeesAndShiftsData = (arrayOfEmployeesData) => {
    const completeDataObject = Object.assign(
      {},
      ...Object.entries({ ...keyToDataObject }).map(([a, key], index) => ({
        [key]: arrayOfEmployeesData[index],
      }))
    );
    Object.keys(completeDataObject).map(
      (key) =>
        (completeDataObject[key]["shiftsData"] = monthWithWorkedShifts(key))
    );
    return completeDataObject;
  };
  const allDataForReports = employeesAndShiftsData(arrayOfEmployeesData);

  const weekDaysSwitch = (jsDate) => {
    const weekDays = getArrayofDaysInReportedMonth(jsDate).map((day) => {
      switch (
        new Date(
          `${jsDate.getFullYear()}.${day.split(".").reverse()}`.split(".")
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

  return (
    <ReportContext.Provider
      value={{
        arrayOfEmployeesData,
        facilityName,
        codeFinal,
        managerName,
        jsDate,
        allDataForReports,
        weekDaysSwitch,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
export default ReportContext;
