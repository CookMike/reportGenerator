import React, { useContext } from "react";

import ReportContext from "../../../context/reportContext";
import "../reportTable.styles.scss";

const SideTableInfo = ({ index }) => {
  const { sideTableArray } = useContext(ReportContext);

  const actualIndex = Math.ceil(index / 2);

  return (
    <React.Fragment>
      <td className={"column15 style76 s style119"} colSpan="4" rowSpan="2">
        {sideTableArray[actualIndex]}
      </td>
    </React.Fragment>
  );
};
export default SideTableInfo;
