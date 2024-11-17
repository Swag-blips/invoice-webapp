import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex w-full  ">
      <Sidebar />
      <main className="flex justify-center items-start mt-[78px] w-full">
        <Main />
      </main>
    </div>
  );
}

export default App;
