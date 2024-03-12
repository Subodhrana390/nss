import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="w-full bg-[rgb(82,30,133)] h-24 flex items-center">
      <div class="container mx-auto px-5 flex items-center justify-between">
        <div class="flex items-center">
          <Image
            src={Logo}
            alt="logo"
            height={80}
            width={80}
            class="cursor-pointer"
          />

          <div class="ml-2">
            <a href="/" class="text-xl font-semibold">
              National Service Scheme
            </a>
            <p class="text-sm">
              <a href="https://gndec.ac.in/" target="_blank" class="text-white">
                Guru Nanak Dev Engineering College, Ludhiana
              </a>
            </p>
          </div>
        </div>

        <div class="hidden lg:flex flex-grow items-center justify-end">
          <ul class="flex space-x-4">
            <li class="nav-item">
              <Link href="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/team" class="nav-link">
                Team
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/event" class="nav-link">
                Event
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contact" class="nav-link">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/join" class="nav-link">
                Join
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
