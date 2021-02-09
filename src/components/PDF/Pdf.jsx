import React, { useEffect } from "react";
import cv from "../../docs/Ayala_Milagros_CV-EN.pdf";
export function Pdf() {
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("downloadPdf").click();
      window.close();
    }
  }, []);
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object data={cv} type="application/pdf" width="100%" height="100%">
        {" "}
        <a href={cv} id="downloadPdf" download="Ayala_Milagros_CV-EN.pdf">
          Click here for download!
        </a>
      </object>
    </div>
  );
}
