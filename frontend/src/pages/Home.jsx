import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-center items-center min-h-[70vh] bg-white">
        <UploadCard />
      </div>
    </div>
  );
}

export default Home;