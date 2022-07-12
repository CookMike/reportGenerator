import React, { useContext } from "react";

import ReportContext from "../../../context/reportContext";
import "../reportTable.styles.scss";

const SideTableInfo = () => {
  const {
    matchedValues,
    findEmployee,
    jsDate,
    facilityName,
    codeFinal,
    managerName,
    allEmployees,
  } = useContext(ReportContext);

  return (
    <React.Fragment>
      <td className="column15 style116 s style119" colSpan="4" rowSpan="2">
        Noční směny (hodin)
      </td>
    </React.Fragment>
  );
};
export default SideTableInfo;
