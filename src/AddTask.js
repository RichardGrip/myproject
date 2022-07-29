import React from "react";

export default function TaskItem({ value }) {
  return (
    <>
      <p>{value.text}</p>
      <p>{value.data}</p>
    </>
  );
}
