import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import GridCards from "../components/GridCards";

export default function Home() {
  return (
    <div >
      <AppBar />
      <div className="app">
      <GridCards/>
      <Footer />
      </div>
    </div>
  );
}