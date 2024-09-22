export default function Form({ num, setNums, item, setItem, data, setData }) {
  function handleEvent(e) {
    e.preventDefault();
    const date = Date.now();
    if (item === "") return;
    setData((v) => [...v, { input: item, numpack: num, id: date }]);
    setItem("");
  }

  return (
    <form className="add-form" onSubmit={handleEvent}>
      <label>What do you need for your 😍 trip?</label>
      <select value={num} onChange={(e) => setNums(+e.target.value)}>
        {Array.from({ length: 20 }).map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Item.."
      />
      <button>Add</button>
    </form>
  );
}
