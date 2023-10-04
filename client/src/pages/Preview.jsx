import React from "react";
import { useParams } from "react-router-dom";
import "../css/preview.css";
function Preview() {
  const { PdfUrl } = useParams();
  return (
    <div className="pdfsize">
      <iframe
        src={`http://localhost:3002/${PdfUrl}`}
        width="100%"
        height="100%"
        title={PdfUrl}
      ></iframe>
    </div>
  );
}

export default Preview;
