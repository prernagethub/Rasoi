import Navbar from "./Components/Navbar";
import MainRoutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <div className="p-5 w-[80%] mx-auto font-thin">
        <Navbar />
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
