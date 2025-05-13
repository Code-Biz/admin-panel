import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "./pages/Home";
import { Services } from "./pages/Services";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Logout } from "./pages/Logout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AdminLayout } from "./components/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* The below given commented parent route is the parent of the below nested routes and it does somewhat the same work the Navbar component used above is doing i.e helps in displaying the nested routes/components on each page + you'll have to use the <outlet/> at the bottom of each components return also.  */}
          {/* <Route path="/" element={<Navbar/>}> */}
          {/* The below index path will return the home comeponent on route : localhost: 8000 and /home will return home component on route loclahost:8000/home*/}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts/all" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
