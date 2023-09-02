import React from "react";

const MailToBtn = ({ mailto, label }) => {
  return (
    <a
      href={"mailto:s.tovar2936@gmail.com"}
      className="text-white font-weight-bold"
    >
      {label}
    </a>
  );
};

export default MailToBtn;
