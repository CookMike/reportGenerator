import React, { useContext } from "react";
import ReportContext from "../../../context/reportContext";

import "../reportTable.styles.scss";

const FooterTabel = ({ employee }) => {
  const { allDataForReports } = useContext(ReportContext);

  return (
    <React.Fragment>
      <tr className="row45">
        <td className="column0 style144 s style150" colSpan="13" rowSpan="2">
          Předpokládaný počet hodin za měsíc :
        </td>

        <td className="column13 style165 s style154" colSpan="2" rowSpan="2">
          =SUM(N8:O
          {7 +
            Array.from(allDataForReports[employee].shiftsInReportedMonth)
              .length}
          )
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
    </React.Fragment>
  );
};
export default FooterTabel;
