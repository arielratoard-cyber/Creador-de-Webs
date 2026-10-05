import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Add every public route here.
const routes = ["", "/contacto", "/aviso-legal", "/privacidad", "/cookies", "/terminos"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
