import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import p1 from "../../../../public/img/person-1.jpg";
import p2 from "../../../../public/img/person-2.jpg";

const HappyClient = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
        <h1 className="text-center text-5xl mb-10 text-emerald-600">Our Happy Buyer</h1>
      <section className="flex justify-center mb-14">
        <section className="flex flex-col w-96 border-2 border-emerald-400 p-4 rounded-lg mr-8">
          <div className="flex flex-row ">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={p1}></img>
              </div>
            </div>
            <div className=" mt-4 ms-3 font-bold">
              <h1>Tania Jahan</h1>
              <h3>Programer</h3>
            </div>
          </div>
          <div className="ms-2 mt-2 rounded">
            <p>
            You have done well so far, but don’t become complacent – there is always room for improvement! I have noticed several errors in your notes, including…
            </p>
          </div>
        </section>
        <section className="flex flex-col w-96 border-2 border-emerald-400 p-4 rounded-lg">
          <div className="flex flex-row ">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={p2}></img>
              </div>
            </div>
            <div className=" mt-4 ms-3 font-bold">
              <h1>Probir Ghosh</h1>
              <h3>Instructor</h3>
            </div>
          </div>
          <div className="ms-2 mt-2 rounded">
            <p>
             Your efforts are commendable, but it would have been good to have seen you focus throughout as your performance waned towards the end of the session.            </p>
          </div>
        </section>
        {/* ------------------------------- */}
      </section>
    </section>
  );
};

export default HappyClient;
