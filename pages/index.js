import { Inter } from "next/font/google";
import Coursel from "@/components/Coursel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Coursel />
    </>
  );
}
