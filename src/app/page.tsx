import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div
        className="flex flex-col p-5 mt-40  h-40 w-4/5 sm:w-1/2 sm:h-60 bg-blue-300 rounded-xl 
      drop-shadow-[10px_5px_2px_rgba(0,0,0,0.25)] border-solid border-2 border-gray-400"
      >
        <h3 className="font-mono font-bold flex justify-center">
          Welcome , Test your knowlage here
        </h3>
        <Link href="/quiz" className="mt-auto flex justify-center">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border 
        border-transparent bg-teal-500  text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Test
          </button>
        </Link>
      </div>
    </main>
  );
}
