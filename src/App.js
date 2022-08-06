import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Main messageList={messageList} setMessageList={setMessageList} />
      <Footer />
    </div>
  );
}

export default App;
