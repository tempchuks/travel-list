export default function Stats({ data }) {
  return data.length <= 0 ? (
    <div className="stats">Start adding some items to your packing list 🚀</div>
  ) : (
    <div className="stats">
      💼 You have {data.length} items on your list, and you already packed{" "}
      {data.filter((d) => d.packedStatus === true).length}(
      {Math.round(
        (data.filter((d) => d.packedStatus === true).length * 100) / data.length
      )}
      %)
    </div>
  );
}
