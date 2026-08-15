export function Footer() {
  return (
    <footer className="bg-ink py-10 text-paper/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <span className="font-display text-lg font-bold text-paper">
          Momentum
        </span>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Momentum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
