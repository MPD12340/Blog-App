import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import SingleBlog from "./pages/SingleBlog";
import Footer from "./components/Footer";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/singleblog/:id" element={<SingleBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs/add" element={<AddBlog />} />
        <Route path="/blogs/edit/:id" element={<EditBlog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
