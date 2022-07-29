import React from "react";
import Task from "./Task";

const text = [
  { id: 1, text: "ТПД", data: "12:04 10.06.2021" },
  { id: 2, text: "ИРД", data: "12:04 10.06.2021" },
  { id: 3, text: "Пользовательская задача 1", data: "" },
];

function App() {
  const [show, setShow] = React.useState(false);

  const style = {
    transform: show ? "rotate(180deg)" : "",
    transition: "transform 150ms ease",
  };

  return (
    <>
      <div className="sqare">
        <div className="test">
          <div className="test2">
            <p className="activ">Активные задачи: 2</p>
            <h2 className="test3">КАКИЕ ТО ТЕСТОВЫЕ ДАННЫЕ</h2>
          </div>
          <div
            className="knopochka-warpper"
            onClick={() => setShow(!show)}
            style={style}
          >
            <div className="knopochka"></div>
          </div>
        </div>
        {show && (
          <div>
            {text.map((block) => (
              <div key={block.id}>
                <Task text={block} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
