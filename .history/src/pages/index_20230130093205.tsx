import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import GridCards from "../components/GridCards";

export default function Home() {
  return (
    <div >
      <div className="app">
      <AppBar />
      <GridCards/>
      <Footer />
      </div>
    </div>
  );
}