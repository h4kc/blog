"use client";
import { CourseMetada } from "@/lib/CourseMetadata";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import YouTube, { YouTubeProps } from "react-youtube";

function Accordion({ title, goal, link, id }: CourseMetada) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="border mt-3 rounded">
      <div className=" bg-stone-100 p-3 flex justify-between items-center rounded">
        <span className=" font-bold text-lg">{id + ". " + title}</span>
        <span onClick={handleOpen}>
          {open ? (
            <FaMinus size={18} color="black" />
          ) : (
            <FaPlus size={18} color="black" />
          )}
        </span>
      </div>
      {open ? (
        <div className="p-3">
          <span>{goal}</span>
          <div className=" p-1">
            <YouTube
              videoId="2g811Eo7K8U"
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Accordion;
