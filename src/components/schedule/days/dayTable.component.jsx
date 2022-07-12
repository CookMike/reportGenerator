import React, { useContext } from "react";

import "../reportTable.styles.scss";

import ReportContext from "../../../context/reportContext";

const DayTable = ({ day, date, allDays }) => {
  const sinceTill =
    Object.keys(allDays).includes(
      `Den${date.substring(0, date.indexOf("."))}`
    ) && allDays[`Den${date.substring(0, date.indexOf("."))}`].split("-");
  const individualShift = (sinceTill) => {
    const timesAndSum = new Array(3);
  };
  return (
    <React.Fragment>
      <td className="column0 style21 f">{date}</td>
      <td className="column1 style20 f">{day}</td>
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
