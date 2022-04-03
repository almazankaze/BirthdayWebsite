import React, { useState } from "react";

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState("");
  const onFileChange = (e) => {
    setSelectedFile(e.target.files);
  };

  const encodeFileBase64 = (file) => {
    let reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let Base64 = reader.result;
        setFileBase64String(Base64);
      };
      reader.onerror = function (e) {
        console.log("error");
      };
    }
  };

  const decodeFileBase64 = (base64String) => {
    return decodeURIComponent(
      atob(base64String)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const decodeBase64 = decodeFileBase64(
    fileBase64String.substring(fileBase64String.indexOf(",") + 1)
  );

  encodeFileBase64(selectedFile[0]);

  return (
    <div>
      <input type="file" id="input-file" onChange={onFileChange} />
    </div>
  );
};

export default FileInput;
