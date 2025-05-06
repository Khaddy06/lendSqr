import Achievement from "./Components/achievement";
import Clients from "./Components/clients";
import Hero from "./Components/hero";
import Navbar from "./Components/navbar";
import Calender from "./Components/calender";
import Customer from "./Components/customer";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className=" bg-white">
        <Clients />
      </section>
      <section className="bg-[#F5F7FA]">
        <Achievement />
      </section>
      <section>
        <Calender />
      </section>
      <section className="">
        <Customer />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
