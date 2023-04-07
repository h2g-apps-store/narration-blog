import Footer from "./components/Footer";
import Header from "./components/Header";
import ArticleList from "./components/articles/ArticleList";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">
      <Header />
      <main className="mb-auto px-40 ">
        <section className="flex    rounded-md shadow-xs mt-10 flex-col justify-center items-center py-20">
          <h1 className="text-6xl font-bold text-gray-700">
            Actualités accessibles avec narration
          </h1>
          <p className="text-xl font-light py-2 text-gray-500 text-center w-[700px]">
            Lorsque l'on visite le blog Narration, on plonge dans un univers de
            découvertes et de partages inépuisables. Chaque jour, ce blog
            propose des articles passionnants portant sur des thèmes variés
          </p>
        </section>
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
