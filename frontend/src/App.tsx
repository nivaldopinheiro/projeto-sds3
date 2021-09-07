import DataTable from "components/DataTable";
import footer from "components/footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
    <NavBar/>
    <div className="conteiner">
      <h1 className="text-primary"> Olá mundo!</h1>

    <DataTable />
    </div>
    <footer />
    </>
  );
}

export default App;
