"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuilEditor = ({ setChangeText, value }) => {
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
    setChangeText(value);
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ script: "sub" }, { script: "super" }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "script",
    "color",
    "background",
    "align",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default QuilEditor;
