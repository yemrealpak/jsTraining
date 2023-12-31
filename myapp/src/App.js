//import logo from './logo.svg';
import "./App.css";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Users
        name={"Yunus"}
        surname={"Alpak"}
        isLoged={false}
        family={["Sezen", "Güneş", "Deniz", "Yunus"]}
      />
    </>
  );
}

export default App;
