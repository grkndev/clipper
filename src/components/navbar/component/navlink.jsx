import Image from "next/image";
import Link from "next/link";

export default function Navlink() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/trending", label: "Trending" },
    { href: "/blog", label: "Blog" },
    { href: "/bookmarket", label: "Bookmarket" },
    { href: "/donate", label: "Donate" },
  ];
  return (
    <>
      <div className="flex items-center gap-7">
        {links.map(({ href, label },index) => (
          <div key={href + index}>
            <Link href={href}>
              <button className="font-semibold">{label}</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
