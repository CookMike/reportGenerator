import React from "react";

import "../reportTable.styles.scss";

const DayTable = ({ dayData, day, date }) => {
  const { startDayShift, endDayShift, startNightShift, endNightShift, sum } =
    dayData;

  return (
    <React.Fragment>
      <td className="column0 style21 f">{date}</td>
      <td className="column1 style20 f">{day}</td>
      <td className="column2 style24 s">{startDayShift}</td>
      <td className="column3 style8 s">{endDayShift}</td>
      <td className="column4 style7 s">{startNightShift}</td>
      <td className="column5 style8 s">{endNightShift}</td>
      <td className="column6 style112 s style113" colSpan="2">
        pracov.
      </td>
      <td className="column8 style13 s">D</td>
      <td className="column9 style14 s">N</td>
      <td className="column10 style14 s">SOB</td>
      <td className="column11 style14 s">NED</td>
      <td className="column12 style15 s">sv.</td>
      <td className="column13 style114 s style115" colSpan="2">
        {sum}
      </td>
    </React.Fragment>
  );
};
export default DayTable;
