import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-8 py-8 flex flex-col items-center
        justify-center gap-2 text-center sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Chandrakanth Kakarla
        </p>
        <p className="flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500">
          Crafted with <Heart size={13} className="text-red-400 fill-red-400" /> by me
        </p>
      </div>
    </footer>
  );
}
