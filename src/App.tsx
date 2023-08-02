import "./App.css";
import InputPage from "./page/InputPage/InputPage";
import PalettePage from "./page/PalettePage/PalettePage";
import SelectedImagePage from "./page/SelectedImagePage/SelectedImagePage";

function App() {
  return (
    <div className="App">
      <InputPage />
      <SelectedImagePage />
      <PalettePage />
    </div>
  );
}

export default App;
