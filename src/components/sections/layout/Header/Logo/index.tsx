import Link from "next/link";

export function Logo(props: any) {
  return (
    <Link
      href="/"
      className="tracking-widest font-extrabold hover:animate-spin rounded-full ring-2 ring-current w-10 h-10 flex justify-center items-center"
      {...props}
    >
      JD
    </Link>
  );
}
