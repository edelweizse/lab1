import Join from "./components/Join";
import Chat from "./components/Chat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/chat"  element={<Join/>} />
      <Route path="/chat/main" element={<Chat/>} />
    </Routes>
  );
}

export default App;
