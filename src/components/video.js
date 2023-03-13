import React from "react";

export default function Video(props) {
  let club1 = props.club1;
  let club2 = props.club2;
  let link = props.link;

  return (
    <div>
      <div className="video w-[35rem] h-[20rem]">
        <iframe src={link} frameborder="0" title="video"></iframe>
        this is video component
      </div>
    </div>
  );
}
