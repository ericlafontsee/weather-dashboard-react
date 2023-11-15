import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Search />
        <Forecast />
      </Wrapper>
    </>
  );
}

export default App;
