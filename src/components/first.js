
import React from "react";
import Hotmatches from "./hotmatches";


import Sportsnews from "./sportsnews";

export default function First() {
  
  

  //   let maxsidebarwidth = 553;
  return (
    <div className=" flex flex-col">


      {/* {menu==='opened'&&width<=553&&<Sidebar />} */}
      <div className=" except-navbar my-1 flex flex-wrap justify-start gap-5">
        {/* <h1 className="text-3xl">Hot Matches</h1> */}
        <Hotmatches />
        <Sportsnews />
      </div>
    </div>
  );
}
