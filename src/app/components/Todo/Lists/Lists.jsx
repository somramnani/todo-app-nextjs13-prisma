const Lists = ({ item, setTodo, todo }) => {
  const removeItem = (item) => {
    setTodo(todo.filter((list) => list !== item));
  };
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h1>{item}</h1>
      <button
        onClick={() => {
          removeItem(item);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Lists;
