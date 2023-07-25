import React, { useEffect } from "react";

const GeceModuAc = ({ geceModu }) => {
  useEffect(() => {
    localStorage.setItem("GeceModuDurumu", geceModu);
  }, [geceModu]);

  return <div></div>;
};

export default GeceModuAc;
