import React from "react";

const DayTable = ({ dayData }) => {
  const {
    date,
    weekDay,
    startDay,
    endDay,
    startNight,
    endNight,
    summary,
    saturday,
    sunday,
    night,
    holidays,
  } = dayData;

  return (
    <React.Fragment>
      <td className="column0 style21 f">{date}</td>
      <td className="column1 style21 f">{weekDay}</td>
      <td className="column2 style7 s">{startDay}</td>
      <td className="column3 style7 s">{endDay}</td>
      <td className="column4 style7 s">{startNight}</td>
      <td className="column5 style7 s">{endNight}</td>
      <td className="column6 style112 s style113" colSpan="2"></td>
      <td className="column8 style7 s">{}</td>
      <td className="column9 style7 s">{night}</td>
      <td className="column10 style7 s">{saturday}</td>
      <td className="column11 style7 s">{sunday}</td>
      <td className="column12 style7 s">{holidays}</td>
      <td className="column13 style114 s style115" colSpan="2">
        {summary}
      </td>
    </React.Fragment>
  );
};
export default DayTable;
