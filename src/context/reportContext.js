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

  const codeFinal = [facilityCode, "/", managerId].join("");

  const findEmployee = (surname) => {
    const searchedEmployee = employees.value.find(
      (employee) => employee["Příjmení"] === surname
    );
    return searchedEmployee;
  };

  const jsDate = new Date(Math.round((date - 25569) * 86400 * 1000));

  const matchedValues = (surname) => {
    const daysInWork = scheduleValues.value.find(
      (row) => row["Příjmení"] === surname
    );
    return daysInWork;
  };

  const allEmployees = employees.value;
  return (
    <ReportContext.Provider
      value={{
        scheduleValues,
        matchedValues,
        findEmployee,
        jsDate,
        facilityName,
        codeFinal,
        managerName,
        allEmployees,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
export default ReportContext;
