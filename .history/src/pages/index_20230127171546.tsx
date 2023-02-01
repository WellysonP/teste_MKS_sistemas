import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import GridCards from "../components/GridCars";

export default function Home() {
  return (
    <div className="app">
      <AppBar />
      <GridCards/>
      <Footer />
    </div>
  );
}