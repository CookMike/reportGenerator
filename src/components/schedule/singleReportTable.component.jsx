import React, { useRef, useEffect } from "react";
import Button from "@mui/material/Button";

import ReportDaysTable from "./singleReportTable/reportDaysTable.component";
import HeaderTable from "./header/headerTable.component";
import FooterTable from "./singleReportTable/footerTable.component";
import Cols from "./singleReportTable/cols.component";

const SingleReportTable = ({ employee }) => {
  const ref = useRef(null);

  useEffect(() => {
    const table = ref.current;
  }, [employee]);

  const creatingExcel = () => {
    console.log(ref.current);
  };

  return (
    <React.Fragment>
      <html
        xmlnsv="urn:schemas-microsoft-com:vml"
        xmlnso="urn:schemas-microsoft-com:office:office"
        xmlnsx="urn:schemas-microsoft-com:office:excel"
        xmlns="http://www.w3.org/TR/REC-html40"
      >
        <table
          ref={ref}
          border="0"
          cellPadding="0"
          cellSpacing="0"
          id={`${employee}`}
          className="sheet0 gridlines"
        >
          <Cols />
          <tbody>
            <HeaderTable employee={employee} />
            <ReportDaysTable employee={employee} />
            <FooterTable employee={employee} />
          </tbody>
        </table>
      </html>
      <br />
      <Button onClick={creatingExcel}>Dowload {employee}'s report</Button>
    </React.Fragment>
  );
};
export default SingleReportTable;
