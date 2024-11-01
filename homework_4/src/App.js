import React from "react";

const SimpleComponent = React.memo(({ number, incrementRenderCount }) => {
  incrementRenderCount();

  const handleAlert = React.useCallback(() => alert(number), [number]);

  return (
    <div onClick={handleAlert}>
      Number: {number}
    </div>
  );
});

export default function App() {
  const renderCount = React.useRef(0);
  const [data, setData] = React.useState(
    Array.from({ length: 1000 }, (_, index) => ({ number: 0, id: String(index + 1) }))
  );

  const random = React.useCallback(() => {
    setData(data =>
      data.map(({ id }) => ({ number: Math.floor(1 + Math.random() * 10), id }))
    );
  }, []);

  const addToTop = React.useCallback(() => {
    setData(data => [{ number: 0, id: Math.random() }, ...data]);
  }, []);

  const incrementRenderCount = React.useCallback(() => {
    renderCount.current++;
  }, []);

  return (
    <div>
      <div>Was rendered: {renderCount.current}</div>
      <button onClick={random}>random</button>
      <button onClick={addToTop}>add to top</button>
      {data.map(item => (
        <SimpleComponent
          key={item.id}
          number={item.number}
          incrementRenderCount={incrementRenderCount}
        />
      ))}
    </div>
  );
}