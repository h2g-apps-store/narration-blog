import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <Header />
      <main className="mb-auto px-40">
        <section className="flex bg-green-400 flex-col justify-center items-center py-20">
          <h1 className="text-6xl font-bold">
            We invest in the world’s potential
          </h1>
          <p className="text-xl font-light py-2 text-center w-[700px]">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </section>
        <section className="py-10"></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
