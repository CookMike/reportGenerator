import React, { useContext } from "react";

import "../reportTable.styles.scss";

import ReportContext from "../../../context/reportContext";

const HeaderTable = ({ employee }) => {
  const { allDataForReports, jsDate, facilityName, codeFinal, managerName } =
    useContext(ReportContext);
  const {
    Jméno: name,
    Příjmení: surname,
    Úvazek: contract,
    Pozice: position,
    shiftsData: shifts,
  } = allDataForReports[employee];
  return (
    <React.Fragment>
      <tr className="row0">
        <td
          className="column0 style25 null style30"
          colSpan="4"
          rowSpan="2"
        ></td>
        <td className="column4 style34 s style39" colSpan="7" rowSpan="2">
          Plánované směny
        </td>
        <td className="column11 style43 s style44" colSpan="8">
          PLÁNOVANÝ ROZVRH SMĚN NA MĚSÍC
        </td>
      </tr>
      <tr className="row3">
        <td className="column11 style47 n style48" colSpan="8">
          {`${jsDate.getMonth() + 1}.${jsDate.getFullYear()}`}
        </td>
      </tr>
      <tr className="row5">
        <td className="column0 style49 s style51" colSpan="5">
          Přijmení
        </td>
        <td className="column5 style51 s style51" colSpan="4">
          Jméno
        </td>
        <td className="column9 style53 s style53" colSpan="4">
          Domácí - výchozí - pracoviště
        </td>
        <td className="column13 style54 s style54" colSpan="3">
          Zařazen jako
        </td>
        <td className="column16 style53 s style55" colSpan="3">
          Prac.smlouva
        </td>
      </tr>
      <tr className="row7">
        <td className="column0 style56 s style57" colSpan="5">
          {surname}
        </td>
        <td className="column5 style60 s style60" colSpan="4">
          {name}
        </td>
        <td className="column9 style62 s style63" colSpan="4">
          {facilityName}
        </td>
        <td className="column13 style65 s style65" colSpan="3">
          {position}
        </td>
        <td className="column16 style65 s style67" colSpan="3">
          {contract.substring(0, 3)}
        </td>
      </tr>
      <tr className="row9">
        <td className="column0 style69 s style70" rowSpan="3">
          Datum
        </td>
        <td className="column1 style72 s style73" rowSpan="3">
          den
        </td>
        <td className="column2 style75 s style77" colSpan="3">
          Nadřízený pracovník - velitel objektu
        </td>
        <td className="column5 style84 s style86" colSpan="6">
          {managerName}
        </td>
        <td className="column11 style93 s style95" colSpan="4">
          Divize
        </td>
        <td className="column15 style93 n style102" colSpan="4">
          {codeFinal}
        </td>
      </tr>
      <tr className="row12">
        <td className="column2 style105 s style107" colSpan="6">
          Plánovaná pracovní doba
        </td>
        <td className="column8 style105 s style107" colSpan="7">
          Plánovaná pracovní doba
        </td>
        <td className="column15 style108 s style104" colSpan="4" rowSpan="2">
          Plánovaný počet hodin
        </td>
      </tr>
      <tr className="row13">
        <td className="column2 style1 s">od</td>
        <td className="column3 style2 s">do</td>
        <td className="column4 style1 s">od</td>
        <td className="column5 style3 s">do</td>
        <td className="column6 style110 s style111" colSpan="2">
          pracoviště
        </td>
        <td className="column8 style4 s">den</td>
        <td className="column9 style5 s">noc</td>
        <td className="column10 style5 s">so</td>
        <td className="column11 style5 s">ne</td>
        <td className="column12 style6 s">sv.</td>
        <td className="column13 style110 s style111" colSpan="2">
          celkem
        </td>
      </tr>
    </React.Fragment>
  );
};
export default HeaderTable;
