import React from "react";

export default function Header() {
  return (
    <header className="flex w-full h-12 bg-green-800 items-center justify-between p-2">
      <div className="text-white">View Highscores</div>
      <div className=" text-white ml-auto">Time : </div>
    </header>
  );
}
