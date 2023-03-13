import React from "react";
import "../sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar list-none bg-grana w-max">
      <li className="navlinks text-white text-xl font-bold py-4 px-10">Home</li>
      <li className="navlinks text-white text-xl font-bold py-4 px-10">UCL</li>
      <li className="navlinks text-white text-xl font-bold py-4 px-10">Laliga</li>
      <li className="navlinks text-white text-xl font-bold py-4 px-10">PL</li>
      <li className="navlinks text-white text-xl font-bold py-4 px-10">Ligue 1</li>
    </nav>
  );
}
