"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Input() {
  const router = useRouter();
  function checkUrl(element) {
    if (element.target.value < 24) return;
    if (
      !element.target.value.startsWith(
        "https://clips.twitch.tv/" || "https://www.twitch.tv/"
      )
    )
      return;
    router.push(`/clip?clipUrl=${element.target.value}`);
  }
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <div className="bg-clipper text-white w-9 mt-8 rounded-xl h-9"></div>
        <input
          onChange={checkUrl}
          placeholder="https://clips.twitch.tv/ITSAWESOMECLIP!"
          className="bg-white shadow-xl font-semibold placeholder:font-medium  w-96 h-12 -ml-5 px-4 py-4 text-sm rounded-xl"
        ></input>
        <Link href="/clip">
          <button className="bg-clipper hover:bg-clipper/25 group transition-all shadow-xl flex items-center justify-center text-white w-9 -ml-5 -mt-8 rounded-xl h-9">
            <svg
              className="w-5 h-5 fill-current text-white group-hover:text-clipper"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <path d="M376,160H272V313.37l52.69-52.68a16,16,0,0,1,22.62,22.62l-80,80a16,16,0,0,1-22.62,0l-80-80a16,16,0,0,1,22.62-22.62L240,313.37V160H136a56.06,56.06,0,0,0-56,56V424a56.06,56.06,0,0,0,56,56H376a56.06,56.06,0,0,0,56-56V216A56.06,56.06,0,0,0,376,160Z" />
              <path d="M272,48a16,16,0,0,0-32,0V160h32Z" />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
}
