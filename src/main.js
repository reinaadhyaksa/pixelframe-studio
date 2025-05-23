import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PopUp from "./components/popup";
import { HandleFunction } from "./components/ui";

document.querySelector('#app').innerHTML = Navbar() + Content() + Footer() + PopUp();

HandleFunction();