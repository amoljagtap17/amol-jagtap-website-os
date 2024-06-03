export function Footer() {
  return (
    <footer className="border-current border-t-4 py-10 mt-24">
      <div className="container font-bold text-center md:flex justify-between">
        <p className="py-2">
          Copyright &copy; John Doe | {new Date().getFullYear()}
        </p>
        <p className="py-2">
          Developed with next.js 14, tailwind and Shadcn/ui
        </p>
      </div>
    </footer>
  );
}
