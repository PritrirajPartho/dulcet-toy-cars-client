import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#b5e7a0] pb-4">
         <div  className="footer-section">
            <div className="footer-conatainer ms-20">
                <Link to={"/"}>Home</Link>
                <Link to={"/registration"}>Registration</Link>
                <Link to={"/login"}>Login</Link>
                <Link className='text-xl ' to={'/alltoys'}>All-Toys</Link>
                <Link className='text-xl ' to={'/addtoy'}>Add Toy</Link>            </div>
            <div className="footer-second-part ms-20 mb-12 mr-0">
                <h2>Dulcet-Toy-Cars</h2>
                <h3 className="mt-3">Contact us</h3>
                <h5 className="mt-4">Phone:0155555555 </h5>
            </div>
            <div className="flex flex-col mt-5 border-dark mr-20">
                <span className="text-2xl mb-3">Email</span>
                <p><input className="px-6 py-3 rounded-xl mb-3" type="text" /></p>
                <button className="btn  bg-neutral-950    rounded-xl">Suscribe</button>
            </div>
         </div>
        <h5 className="text-center mb-4 mt-0">Dulcet-Toy-Cars©All-right-reserved.2023</h5>
    </section>
  );
};

export default Footer;
