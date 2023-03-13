import React from "react";

export default function Livescore() {
  
  console.log();
  return (
    // <div className='w-[50rem] h-24 bg-red-500'></div>
    <iframe
      id="ora"
      src="https://www.scorebat.com/embed/livescore/?token=NjUxNzhfMTY3ODA4NjU0NV83MGI3MGVmMDc3NDg2ZTE4YmE2YjUzMzczN2ViZjAzZGRmYWI5N2Iy"
      frameBorder={0}
      width={600}
      height={760}
      allowFullScreen
      // allow="autoplay; fullscreen"
      style={{
        width: "100%",
        height: "760px",
        overflow: "hidden",
        display: "block",
      }}
      className="_scorebatEmbeddedPlayer_"
      title="a"
    />
  );
}
