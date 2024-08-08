import React from "react";

const FormattedTimestamp = ({ timestamp }) => {
  let date = new Date(parseInt(timestamp)).toLocaleString();
  return (
    <div>
      <span> {date} </span>
    </div>
  );
};
export default FormattedTimestamp;
