import { Scripts , Outlet } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet/>
        <Scripts/>
      </body>
    </html>
  );
}
