import { createContext, useContext } from "react";
import { easter } from "date-easter";
import GeneralContext from "./generalContext";

const ReportContext = createContext();

export function ReportProvider({ children }) {
  const { fileUploaded } = useContext(GeneralContext);

  const [scheduleValues, schedule, employees] = fileUploaded;

  const [date, facilityCode, facilityName, managerId, managerName] =
    schedule.value.map((el) => {
      const arr = Object.values(el);
      return arr[1];
    });
  const getJsDate = (stringDate) =>
    new Date(Math.round((stringDate - 25569) * 86400 * 1000));

  const currentMonthDate = getJsDate(date);

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

  const weekDaysSwitch = () => {
    const weekDays = getArrayofDaysInReportedMonth(getJsDate(date)).map(
      (day) => {
        switch (
          new Date(
            `${getJsDate(date).getFullYear()}.${day
              .split(".")
              .reverse()}`.split(".")
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
      }
    );

    return weekDays;
  };
  const stringDays = weekDaysSwitch(getJsDate(date));

  const easterDate = easter(getJsDate(date).getFullYear());

  const nationalHolidaySwitch = () => {
    const holidays = [];
    switch (getJsDate(date).getMonth()) {
      case 0:
        holidays.push("1.1");
        break;
      case easterDate.month - 1:
        holidays.push(`${easterDate.day - 2}.${easterDate.month}`);
        holidays.push(`${easterDate.day + 1}.${easterDate.month}`);
        break;
      case 4:
        holidays.push("1.5");
        holidays.push("8.5");
        break;
      case 6:
        holidays.push("5.7");
        holidays.push("6.7");
        break;
      case 8:
        holidays.push("28.9");
        break;
      case 9:
        holidays.push("28.10");
        break;
      case 10:
        holidays.push("17.11");
        break;
      case 11:
        holidays.push("24.12");
        holidays.push("25.12");
        holidays.push("26.12");
        break;
      default:
        holidays.push("");
    }
    return holidays;
  };

  const holidays = nationalHolidaySwitch();

  const sideTableArray = [
    "Noční směny        (hodin)",
    "=SUM(J8:J45)",
    "Svátky(hodin)",
    "=SUM(M8:M45)",
    "Služba se psem (hodin)",
    "",
    "Ostatní služby-   So,Ne, aj. (hodin)",
    "=SUM(K8:K45)+SUM(L8:L45)",
    "Čerpaná dovolená  (dní)",
    "",
    "Jiné stanoviště -     nádvorný,aj.(hodin)",
    "jine stanoviste",
    "odměny",
    "",
    "Ostatní",
    "",
    "Ostatní",
    "",
    "Ostatní",
    "",
    "Ostatní",
    "",
  ];

  const codeFinal = [facilityCode, "/", managerId].join("");

  const arrayOfEmployeesData = employees.value;

  const keyToDataObject = new Array(arrayOfEmployeesData.length)
    .fill("1")
    .map((el, index) => (el = arrayOfEmployeesData[index]["Příjmení"]));

  const daysInWorkObject = (surname) => {
    const daysInWork = scheduleValues.value.find(
      (row) => row["Příjmení"] === surname
    );
    return daysInWork;
  };

  const monthWithWorkedShifts = (surname) => {
    const daysInWork = daysInWorkObject(surname);

    const dates = getArrayofDaysInReportedMonth(getJsDate(date));

    const formatNumber = (data) => {
      return (1 * data).toLocaleString("cs-CZ", {
        minimumFractionDigits: 2,
      });
    };

    const monthShiftsObject = new Map();
    dates.forEach((dayDate, index) =>
      monthShiftsObject.set(index, {
        date: `${dayDate}`,
        weekDay: `${stringDays[index]}`,
        startDay: "",
        endDay: "",
        startNight: "",
        endNight: "",
        day: "",
        night: "",
        saturday: "",
        sunday: "",
        holidays: "",
        summary: "",
      })
    );

    const weekendSaturdayShift = (weekday, start, end) => {
      let value;
      switch (weekday) {
        case "Pátek":
          value = start > end ? formatNumber(end) : " ";
          break;
        case "Sobota":
          value = formatNumber(start < end ? end - start : 24 - start);
          break;
        default:
          value = " ";
      }
      return value;
    };

    const weekendSundayShift = (weekDay, start, end) => {
      let value;
      switch (weekDay) {
        case "Sobota":
          value = start > end && formatNumber(end);
          break;
        case "Neděle":
          value = formatNumber(start < end ? end - start : 24 - start);
          break;
        default:
          value = " ";
      }
      return value;
    };

    const nightShift = (start, end) => {
      let value = 0;
      if (start < end) {
        start < 6 && (value += 6 - start);
        end > 22 && (value += end - 22);
      } else if (start > end) {
        start < 22 ? (value += 2) : (value += 24 - start);
        end < 6 ? (value += end) : (value += 6);
      }
      return value === 0 ? " " : formatNumber(value);
    };

    const hollidaysHours = (date, start, end) => {
      let value = 0;
      if (holidays.includes(date)) {
        if (start < end) {
          value += end - start;
        } else if (end < start) {
          value += holidays.includes(
            +date.split(".")[0] + 1 + "." + date.split(".")[1]
          )
            ? 24 - start + end
            : 24 - start;
        }
      } else if (
        holidays.includes(+date.split(".")[0] + 1 + "." + date.split(".")[1]) &&
        end < start
      ) {
        value += end;
      }
      return value !== 0 ? formatNumber(value) : " ";
    };

    monthShiftsObject.forEach((value, key) => {
      if (Boolean(daysInWork[`Den${key + 1}`])) {
        //dovolena nemoc condition render
        const [st, en] = daysInWork[`Den${key + 1}`].split("-");
        const start = parseFloat(st.replace(",", "."));
        const end = parseFloat(en.replace(",", "."));
        start > end
          ? (value.startNight = formatNumber(start)) &&
            (value.endNight = formatNumber(end)) &&
            (value.night = nightShift(start, end)) &&
            (value.summary = formatNumber(24 - start + end)) &&
            (value.saturday = weekendSaturdayShift(
              value.weekDay,
              start,
              end
            )) &&
            (value.sunday = weekendSundayShift(value.weekDay, start, end)) &&
            (value.holidays = hollidaysHours(value.date, start, end))
          : (value.startDay = formatNumber(start)) &&
            (value.endDay = formatNumber(end)) &&
            (value.night = nightShift(start, end)) &&
            (value.summary = formatNumber(end - start)) &&
            (value.saturday = weekendSaturdayShift(
              value.weekDay,
              start,
              end
            )) &&
            (value.sunday = weekendSundayShift(value.weekDay, start, end)) &&
            (value.holidays = hollidaysHours(value.date, start, end));
      }
    });

    return monthShiftsObject;
  };

  const employeesAndShiftsData = () => {
    const completeDataObject = Object.assign(
      {},
      ...Object.entries({ ...keyToDataObject }).map(([_, key], index) => ({
        [key]: arrayOfEmployeesData[index],
      }))
    );
    Object.keys(completeDataObject).map(
      (person) =>
        (completeDataObject[person]["shiftsInReportedMonth"] =
          monthWithWorkedShifts(person))
    );

    return completeDataObject;
  };

  const allDataForReports = employeesAndShiftsData();

  return (
    <ReportContext.Provider
      value={{
        arrayOfEmployeesData,
        facilityName,
        codeFinal,
        managerName,
        currentMonthDate,
        allDataForReports,
        sideTableArray,
        daysInWorkObject,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
export default ReportContext;
