import React from "react";

interface Props {
  label: string;
}

function PPButton({ label }: Props) {
  const click = () => {
    console.log("voce clicou...");
  };

  return <button onClick={click}>{label}</button>;
}

export default PPButton;
