//? Component

import Cat from "./companants/Cat";

function App() {
  //? JS kodu

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat
        name="Kedi"
        img="https://picsum.photos/id/684/600/400"
        color="rgba(96, 97, 143, 0.575)"
        eye
      />
      <Cat />
      <Cat />
    </div>
  );
}

export default App;
