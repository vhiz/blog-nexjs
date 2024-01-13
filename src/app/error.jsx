"use client";

import Link from "next/link";
import Image from "next/image";
export default function error() {
  return (
    <div className="w-full flex items-center flex-col gap-12 justify-center h-[80vh]">
      <div className="relative w-[25rem] h-[25rem]">
        <Image src={"/error.png"} alt="" fill className="object-cover" />
      </div>
      <Link href="/" className="underline">
        Go To Home Page
      </Link>
    </div>
  );
}
