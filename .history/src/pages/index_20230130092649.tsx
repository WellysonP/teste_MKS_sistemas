import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import GridCards from "../components/GridCards";

export default function Home() {
  return (
    <div className="app">
      <div>
      <AppBar />
      <GridCards/>
      <Footer />
      </div>
      <div>
        
      </div>
    </div>
  );
}