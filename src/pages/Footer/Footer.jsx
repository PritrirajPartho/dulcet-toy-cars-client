import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <section className="bg-[#d34882] pb-2">
        <footer className="footer p-10  text-neutral-content">
                <div className="text-xl ms-12">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/registration"}>Registration</Link>
                        <Link to={"/login"}>Login</Link>
                        <Link  to={'/alltoys'}>All-Toys</Link>
                        <Link  to={'/addtoy'}>Add Toy</Link>   
                </div> 
                <div>
                        <h1 className="text-3xl">Dulcet-Toy-Cars</h1>
                        <h3 className="mt-3 text-xl">Contact us</h3>
                        <h5 className="mt-4">Phone:  0155555555 </h5>
                </div> 
                <div>
                        <span className="text-2xl mb-3">Email</span>
                        <p><input className="px-6 py-3 rounded-xl mb-3" type="text" /></p>
                        <button className="btn  bg-primary   rounded-xl border-0">Suscribe</button>
                </div>
        </footer>
        <h5 className="text-center text-xl mb-10 mt-0 text-white">Dulcet-Toy-Cars©All-right-reserved.2023</h5>
   </section>
  );
};

export default Footer;
