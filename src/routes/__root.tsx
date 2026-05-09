import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#ffd1dc" },
      { name: "author", content: "ကိုကို" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "my_MM" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Our One Year Anniversary" },
      { property: "og:title", content: "Our One Year Anniversary" },
      { name: "twitter:title", content: "Our One Year Anniversary" },
      { name: "description", content: "An interactive, romantic one-year anniversary website — a personal gift built as a single-page experience with a love story timeline, photo gallery, mini games," },
      { property: "og:description", content: "An interactive, romantic one-year anniversary website — a personal gift built as a single-page experience with a love story timeline, photo gallery, mini games," },
      { name: "twitter:description", content: "An interactive, romantic one-year anniversary website — a personal gift built as a single-page experience with a love story timeline, photo gallery, mini games," },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FlTgAE6rmCbWj5ax28WcPFvTku03/social-images/social-1778340180526-timeline4.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/FlTgAE6rmCbWj5ax28WcPFvTku03/social-images/social-1778340180526-timeline4.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
