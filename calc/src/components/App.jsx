import { useState } from "react";
import Button from "./Button";

export default function App() {
  const button = [
    {
      id: 1,
      value: "AC",
    },
    {
      id: 2,
      value: "C",
    },
    {
      id: 3,
      value: "^",
    },
    {
      id: 4,
      value: "/",
    },
    {
      id: 5,
      value: "7",
    },
    {
      id: 6,
      value: "8",
    },
    {
      id: 7,
      value: "9",
    },
    {
      id: 8,
      value: "*",
    },
    {
      id: 9,
      value: "4",
    },
    {
      id: 10,
      value: "5",
    },
    {
      id: 11,
      value: "6",
    },
    {
      id: 12,
      value: "-",
    },
    {
      id: 13,
      value: "1",
    },
    {
      id: 14,
      value: "2",
    },
    {
      id: 15,
      value: "3",
    },
    {
      id: 16,
      value: "+",
    },
    {
      id: 17,
      value: "0",
    },
    {
      id: 18,
      value: "00",
    },
    {
      id: 19,
      value: ".",
    },
    {
      id: 20,
      value: "=",
    },
  ];

  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(false);

  const buttons = button.map((b) => {
    return <Button key={b.id} value={b.value} clicked={clicked} />;
  });

  function clicked(event) {
    const buttonClicked = event.currentTarget.value;
    // console.log(typeof buttonClicked);
    if (buttonClicked === "AC") {
      setDisplay("0");
      setResult(false);
    } else if (buttonClicked === "C") {
      if (result) {
        setDisplay("0");
        setResult(false);
      } else {
        setDisplay((prev) => {
          if (prev.length <= 1 || prev === "0") {
            return "0";
          } else {
            return prev.slice(0, -1);
          }
        });
      }
    } else if (buttonClicked == "=") {
      setResult(true);
      setDisplay((prev) => {
        return eval(prev);
      });
    } else {
      setDisplay((prev) => {
        if (result) {
          setResult(false);
          return buttonClicked;
          setDisplay;
        } else {
          if (prev === "0") {
            return buttonClicked;
          } else {
            return prev + buttonClicked;
          }
        }
      });
    }
  }

  return (
    <>
      <div className="full">
        <div className="calc">
          <h1>Calculator</h1>
          <h1 className="dis">{display}</h1>
          <div className="keys">{buttons}</div>
        </div>
      </div>
    </>
  );
}
