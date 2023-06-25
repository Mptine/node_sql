import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { AppHeader } from "./components/AppHeader"
import { AppFooter } from  "./components/AppFooter"
import { EquipmentsList } from "../src/routes/Equipments";
import { SecondaryStuff } from "./routes/SecondaryStuff";
import { CertificatesList } from "./routes/Certificates";

function App() {
  return (
    <div className="bg-[#272728] h-fit w-full mb-24">
      <BrowserRouter>
        <AppHeader />
        <div className="flex h-max mt-14">
          <div className=" w-2/12 h-max"></div>
          <div className=" w-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificates" element={<CertificatesList />} />
              <Route path="/equipments" element={<EquipmentsList />} />
              <Route path="/others" element={<SecondaryStuff />} />
            </Routes>
          </div>
        </div>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;