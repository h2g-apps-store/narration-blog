import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./pages/Details";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="mb-auto px-10 sm:px-10 md:px-28  lg:px-32 xl:px-40 ">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/article/:id" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
