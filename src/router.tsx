import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type RouterCtx = {
  path: string;
  navigate: (to: string) => void;
};

const Ctx = createContext<RouterCtx | null>(null);

function normalize(p: string) {
  if (!p) return "/";
  // remove trailing slash except root, strip query/hash
  let out = p.split("?")[0].split("#")[0];
  if (out.length > 1 && out.endsWith("/")) out = out.slice(0, -1);
  if (!out.startsWith("/")) out = "/" + out;
  return out;
}

function getInitialPath() {
  // support file:// and hash fallback (#/services)
  if (typeof window === "undefined") return "/";
  const hash = window.location.hash;
  if (hash.startsWith("#/")) return normalize(hash.slice(1));
  // handle direct load where pathname may contain index.html
  const pathname = window.location.pathname;
  if (pathname.endsWith("/index.html") || pathname.endsWith("404.html")) return "/";
  return normalize(pathname);
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => getInitialPath());

  useEffect(() => {
    const sync = () => setPath(getInitialPath());

    const onPop = () => sync();
    const onHash = () => sync();

    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onHash);

    // handle hash-based navigation for file://
    if (window.location.hash.startsWith("#/")) sync();

    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const navigate = (to: string) => {
    const next = normalize(to);
    if (next === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const isFile = window.location.protocol === "file:";

    if (isFile) {
      // use hash routing for file protocol (singlefile local open)
      window.location.hash = `#${next}`;
      setPath(next);
    } else {
      // try history API, fall back to hash if it fails (e.g., file)
      try {
        window.history.pushState(null, "", next);
        setPath(next);
      } catch {
        window.location.hash = `#${next}`;
        setPath(next);
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("routechange", { detail: next }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>;
}

export function useRouter() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useRouter outside RouterProvider");
  return v;
}

export function usePath() {
  return useRouter().path;
}

export function Link({
  to,
  children,
  className,
  onClick,
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  [k: string]: any;
}) {
  const { navigate } = useRouter();
  // for file protocol, href should be hash
  const isFile = typeof window !== "undefined" && window.location.protocol === "file:";
  const href = isFile ? `#${to}` : to;
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

// helper to check active
export function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(href + "/");
}
