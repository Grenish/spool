import Image from "next/image";

export default function DashNavbar() {
  return (
    <header className="w-full">
      <nav className="w-11/12 mx-auto flex items-center justify-between p-2">
        <div>
          <Image
            src="/spool.png"
            alt="Spool logo"
            width={30}
            height={30}
            className="rounded-lg"
          />
        </div>
        <div>{/*<UserButton fullname="John Doe" />*/}</div>
      </nav>
    </header>
  );
}
