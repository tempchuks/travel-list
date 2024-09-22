import "../../src/index.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
import { useState } from "react";
export function App() {
  const [num, setNums] = useState(1);
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Header />
      <Form
        num={num}
        setNums={setNums}
        item={item}
        setItem={setItem}
        data={data}
        setData={setData}
      />
      <List data={data} setData={setData} />
      <Stats data={data} />
    </div>
  );
}
