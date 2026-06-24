import { Outlet } from "react-router";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


export default function RootLayout() {
  return (
    <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}
