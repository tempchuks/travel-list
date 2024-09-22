import { useState } from "react";

export default function List({ data, setData }) {
  function handleEvent(id, status) {
    const hey = data.map((item) =>
      item.id === id ? { ...item, packedStatus: status } : item
    );
    setData(() => [...hey]);
  }
  function deleteList(v) {
    const hey = data.filter((list) => list.id !== v);

    setData(() => [...hey]);
  }
  function deleteAll() {
    const hey = window.confirm("are you sure you want to clear all list");
    if (hey) setData([]);
  }
  const [sortBy, setSortBy] = useState("input");
  let Sorted;
  if (sortBy === "input") Sorted = data;
  if (sortBy === "description") {
    Sorted = data
      .slice(0, data.length)
      .sort((a, b) => a.input.localeCompare(b.input));
  }
  if (sortBy === "status") {
    Sorted = data.slice(0, data.length).sort((a, b) => {
      return (
        Number(a.packedStatus !== true ? 0 : 1) -
        Number(b.packedStatus !== true ? 0 : 1)
      );
    });
  }
  return (
    <div className="list">
      <ul>
        {Sorted.map((v) => (
          <PackedList
            key={v.id}
            deleteList={deleteList}
            handleEvent={handleEvent}
            v={v}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="status">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={deleteAll}>CLEAR LIST</button>
      </div>
    </div>
  );
}

function PackedList({ v, handleEvent, deleteList }) {
  return (
    <li key={v.id}>
      <input
        onChange={(e) => {
          if (e.target.checked) handleEvent(v.id, true);
          if (!e.target.checked) handleEvent(v.id, false);
        }}
        type="checkbox"
      />{" "}
      {v.numpack}
      <p
        style={
          v?.packedStatus === true ? { textDecoration: "line-through" } : {}
        }
      >
        {v.input}
      </p>{" "}
      <button onClick={() => deleteList(v.id)}>❌</button>
    </li>
  );
}
