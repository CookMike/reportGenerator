import { createContext, useState } from "react";
import * as excel from "xlsx";

const GeneralContext = createContext();

export function GeneralProvider({ children }) {
  const [fileUploaded, setFileUploaded] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  const readDataFromInput = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const [file] = e.target.files;
    reader.onload = (e) => {
      const data = [];
      const input = e.target.result;
      const wb = excel.read(input, { type: "array" });
      const wsnames = wb.SheetNames;
      wsnames.forEach((sheetName) => {
        const s = {};
        s.key = sheetName;
        s.value = excel.utils.sheet_to_json(wb.Sheets[sheetName]);
        data.push(s);
      });
      setFileUploaded(data);
      setIsFileLoaded(true);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <GeneralContext.Provider
      value={{ readDataFromInput, fileUploaded, isFileLoaded }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralContext;
