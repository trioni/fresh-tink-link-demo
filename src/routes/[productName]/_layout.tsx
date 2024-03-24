import { RouteConfig } from "$fresh/server.ts";
import Layout from "../_layout.tsx";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
  csp: true,
};

export default Layout;
