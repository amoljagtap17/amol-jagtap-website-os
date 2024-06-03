import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Doe portfolio website",
    short_name: "John Doe Website",
    description: "Portfolio website of John Doe",
    start_url: "/",
    display: "standalone",
    background_color: "#ede8df",
    theme_color: "#ede8df",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
