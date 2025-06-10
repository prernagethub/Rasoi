import Navbar from "./Components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import MainRoutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <div className="p-5 w-[80%] mx-auto font-thin">
        <Navbar />
        <Mainroutes />
      </div>
    </>
  );
}

export default App;
