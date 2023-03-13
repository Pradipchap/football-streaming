import React from "react";

export default function Fixtures() {
  return (
    <div className="ucl-matches w-[80rem] h-[50rem] margin-auto">
      {/* <div className=" w-[35rem] max-tablet:w-[100vw] h-24 flex justify-around items-center rounded-3xl  shadow-md">
        <img
          className="w-[4em] h-[4em] max-tablet:w-[3em] max-tablet:h-[3em]"
          src={`https://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/128/FC-Barcelona-icon.png`}
          width="128"
          height="128"
          alt="a"
        />

        <div className="">01:45</div>
        <img
          className="w-[4em] h-[4em] max-tablet:w-[3em] max-tablet:h-[3em]"
          src="https://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/128/Real-Madrid-icon.png"
          width="128"
          height="128"
          alt="a"
        />
      </div> */}
      <iframe src="https://www.scorebat.com/embed/g/1290420/" frameBorder={0} width={560} height={650} allowFullScreen allow="autoplay; fullscreen" style={{width: '100%', overflow: 'hidden'}} className="_scorebatEmbeddedPlayer_" title="psg vs bayern"/>
    </div>
  );
}
