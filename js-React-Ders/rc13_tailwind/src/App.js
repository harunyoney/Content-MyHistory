import Typografy from "./components/Typografy";

function App() {
  return (
    <div className="App">
      <h2 className="text-purple-700">Hoşgeldin Ya Şehri React</h2>
      <h6 className="text-xs">H6 OLDU</h6>
      <h1 className="text-2xl">H1 OLDU</h1>
      <h1 className="text-[3rem]">H1 OLDU</h1>
      <Typografy />

      <h1 className="line-clamp-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sed vel
        porro pariatur voluptatibus et quasi neque, ipsa ex atque repellat eaque
        sunt suscipit magnam maxime. Iure magnam optio, enim cumque totam
        quaerat.
      </h1>
    </div>
  );
}

export default App;
