import BlogHeader from "./components/blog/BlogHeader";
import BlogMain from "./components/blog/BlogMain";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Main from "./components/home/Main";

const App = () => {
  return (
    <div className="flex flex-col gap-[60px]">
      <Header />
      <Main />
      <Footer />
      <hr />
      <BlogHeader />
      <BlogMain />
      <Footer/>
    </div>
  );
};

export default App;
