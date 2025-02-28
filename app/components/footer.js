import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-lg shadow-sm bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-5 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Temurbek{"."}
          </a>
          This site is created by 8-"Alfa" grade pupil Temurbek Samatov
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/tarix" className="hover:underline me-4 md:me-6">
              Tarix
            </Link>
          </li>
          <li>
            <Link href="/janglar" className="hover:underline me-4 md:me-6">
              Janglar  
            </Link>
          </li>
          <li>
            <Link href="/imperiya" className="hover:underline me-4 md:me-6">
              Imperiya
            </Link>
          </li>
          <li>
            <Link href="/testlar" className="hover:underline">
              Testlar
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
