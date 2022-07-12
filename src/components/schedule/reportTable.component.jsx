import { useContext } from "react";
import ReportContext from "../../context/reportContext";

import "./reportTable.styles.scss";
import ReportDaysTable from "./reportDaysTable.component";
import HeaderTable from "./header/headerTable.component";

const ReportTable = (employeeData) => {
  const {
    matchedValues,
    findEmployee,
    jsDate,
    facilityName,
    codeFinal,
    managerName,
    allEmployees,
  } = useContext(ReportContext);

  const initials = employeeData.employee;

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
  // console.log(weekDaysInReportedMonth);
  // console.log(datesForReportedMonth);

  return (
    <div>
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        id={`${initials["Příjmení"]}+${initials["Jméno"]}`}
        className="sheet0 gridlines"
      >
        <col className="col0" />
        <col className="col1" />
        <col className="col2" />
        <col className="col3" />
        <col className="col4" />
        <col className="col5" />
        <col className="col6" />
        <col className="col7" />
        <col className="col8" />
        <col className="col9" />
        <col className="col10" />
        <col className="col11" />
        <col className="col12" />
        <col className="col13" />
        <col className="col14" />
        <col className="col15" />
        <col className="col16" />
        <col className="col17" />
        <col className="col18" />
        <tbody>
          <HeaderTable initials={initials} />
          <ReportDaysTable />
          {/* <tr className="row14">
            <td className="column0 style19 f">1/5</td>
            <td className="column1 style20 f">Sunday</td>
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
            <td
              className="column15 style116 s style119"
              colSpan="4"
              rowSpan="2"
            >
              Noční směny (hodin)
            </td>
          </tr>
          <tr className="row15">
            <td className="column0 style21 f">2/5</td>
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
          </tr>
          <tr className="row16">
            <td className="column0 style22 f">3/5</td>
            <td className="column1 style23 f">Tuesday</td>
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
            <td
              className="column15 style162 s style125"
              colSpan="4"
              rowSpan="2"
            >
              =SUM(J15:J45)'
            </td>
          </tr>
          <tr className="row17">
            <td className="column0 style22 f">4/5</td>
            <td className="column1 style23 f">Wednesday</td>
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
          </tr>
          <tr className="row18">
            <td className="column0 style22 f">5/5</td>
            <td className="column1 style23 f">Thursday</td>
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
            <td className="column15 style76 s style127" colSpan="4" rowSpan="2">
              Svátky (hodin)
            </td>
          </tr>
          <tr className="row19">
            <td className="column0 style22 f">6/5</td>
            <td className="column1 style23 f">Friday</td>
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
          </tr>
          <tr className="row20">
            <td className="column0 style22 f">7/5</td>
            <td className="column1 style23 f">Saturday</td>
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
            <td
              className="column15 style163 s style123"
              colSpan="4"
              rowSpan="2"
            >
              =SUM(M15:M45)'
            </td>
          </tr>
          <tr className="row21">
            <td className="column0 style22 f">8/5</td>
            <td className="column1 style23 f">Sunday</td>
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
          </tr>
          <tr className="row22">
            <td className="column0 style22 f">9/5</td>
            <td className="column1 style23 f">Monday</td>
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
            <td className="column15 style76 s style127" colSpan="4" rowSpan="2">
              Služba se psem (hodin)
            </td>
          </tr>
          <tr className="row23">
            <td className="column0 style22 f">10/5</td>
            <td className="column1 style23 f">Tuesday</td>
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
          </tr>
          <tr className="row24">
            <td className="column0 style22 f">11/5</td>
            <td className="column1 style23 f">Wednesday</td>
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
            <td
              className="column15 style122 s style123"
              colSpan="4"
              rowSpan="2"
            >
              sluzba pes
            </td>
          </tr>
          <tr className="row25">
            <td className="column0 style22 f">12/5</td>
            <td className="column1 style23 f">Thursday</td>
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
          </tr>
          <tr className="row26">
            <td className="column0 style22 f">13/5</td>
            <td className="column1 style23 f">Friday</td>
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
            <td className="column15 style76 s style127" colSpan="4" rowSpan="2">
              Ostatní služby- So,Ne, aj. (hodin)
            </td>
          </tr>
          <tr className="row27">
            <td className="column0 style22 f">14/5</td>
            <td className="column1 style23 f">Saturday</td>
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
          </tr>
          <tr className="row28">
            <td className="column0 style22 f">15/5</td>
            <td className="column1 style23 f">Sunday</td>
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
            <td
              className="column15 style164 s style125"
              colSpan="4"
              rowSpan="2"
            >
              =SUM(K15:K45)+SUM(L15:L45)'
            </td>
          </tr>
          <tr className="row29">
            <td className="column0 style22 f">16/5</td>
            <td className="column1 style23 f">Monday</td>
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
          </tr>
          <tr className="row30">
            <td className="column0 style22 f">17/5</td>
            <td className="column1 style23 f">Tuesday</td>
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
            <td className="column15 style76 s style127" colSpan="4" rowSpan="2">
              Čerpaná dovolená (dní)
            </td>
          </tr>
          <tr className="row31">
            <td className="column0 style22 f">18/5</td>
            <td className="column1 style23 f">Wednesday</td>
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
          </tr>
          <tr className="row32">
            <td className="column0 style22 f">19/5</td>
            <td className="column1 style23 f">Thursday</td>
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
            <td
              className="column15 style129 null style125"
              colSpan="4"
              rowSpan="2"
            ></td>
          </tr>
          <tr className="row33">
            <td className="column0 style22 f">20/5</td>
            <td className="column1 style23 f">Friday</td>
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
          </tr>
          <tr className="row34">
            <td className="column0 style22 f">21/5</td>
            <td className="column1 style23 f">Saturday</td>
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
            <td className="column15 style76 s style127" colSpan="4" rowSpan="2">
              Jiné stanoviště - nádvorný,aj.(hodin)
            </td>
          </tr>
          <tr className="row35">
            <td className="column0 style22 f">22/5</td>
            <td className="column1 style23 f">Sunday</td>
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
          </tr>
          <tr className="row36">
            <td className="column0 style22 f">23/5</td>
            <td className="column1 style23 f">Monday</td>
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
            <td
              className="column15 style129 s style123"
              colSpan="4"
              rowSpan="2"
            >
              jine stanoviste
            </td>
          </tr>
          <tr className="row37">
            <td className="column0 style22 f">24/5</td>
            <td className="column1 style23 f">Tuesday</td>
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
          </tr>
          <tr className="row38">
            <td className="column0 style22 f">25/5</td>
            <td className="column1 style23 f">Wednesday</td>
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
            <td className="column15 style131 s style132" colSpan="4">
              odměny
            </td>
          </tr>
          <tr className="row39">
            <td className="column0 style22 f">26/5</td>
            <td className="column1 style23 f">Thursday</td>
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
            <td className="column15 style133 null style134" colSpan="4"></td>
          </tr>
          <tr className="row40">
            <td className="column0 style22 f">27/5</td>
            <td className="column1 style23 f">Friday</td>
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
            <td className="column15 style131 s style132" colSpan="4">
              Ostatní
            </td>
          </tr>
          <tr className="row41">
            <td className="column0 style22 f">28/5</td>
            <td className="column1 style23 f">Saturday</td>
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
            <td className="column15 style122 null style123" colSpan="4"></td>
          </tr>
          <tr className="row42">
            <td className="column0 style22 f">29/5</td>
            <td className="column1 style23 f">Sunday</td>
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
            <td className="column15 style131 s style132" colSpan="4">
              Ostatní
            </td>
          </tr>
          <tr className="row43">
            <td className="column0 style22 f">30/5</td>
            <td className="column1 style23 f">Monday</td>
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
            <td className="column15 style133 null style134" colSpan="4"></td>
          </tr>
          <tr className="row44">
            <td className="column0 style22 f">31/5</td>
            <td className="column1 style23 f">Tuesday</td>
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
            <td className="column15 style131 s style132" colSpan="4">
              Ostatní
            </td>
          </tr> */}
          <tr className="row45">
            <td
              className="column0 style144 s style150"
              colSpan="13"
              rowSpan="2"
            >
              Předpokládaný počet hodin za měsíc :
            </td>
            <td
              className="column13 style165 s style154"
              colSpan="2"
              rowSpan="2"
            >
              =SUM(N15:O45)'
            </td>
            <td className="column15 style140 null style134" colSpan="4"></td>
          </tr>
          <tr className="row46">
            <td className="column15 style155 s style132" colSpan="4">
              Ostatní
            </td>
          </tr>
          <tr className="row47">
            <td className="column0 style135 null style136" colSpan="13"></td>
            <td className="column13 style25 null style136" colSpan="2"></td>
            <td className="column15 style140 null style134" colSpan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ReportTable;
