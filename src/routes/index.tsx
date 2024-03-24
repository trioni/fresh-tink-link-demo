import { Anchor } from "../components/Anchor.tsx";
import { productConfigMap } from "../app.config.ts";
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
  csp: true,
};

export default function Home() {
  return (
    <div>
      <div class="px-4 py-16 mx-auto bg-teal-dark">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl text-white flex">
            <img src="/logo.svg" alt="" /> Demo
          </h1>
        </div>
      </div>
      <div class="container mx-auto sm:flex sm:flex-row gap-4 py-8 px-4 sm:-mt-16">
        {Object.values(productConfigMap).map((product) => (
          <div class="w-full md:w-1/2 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
            <img
              src={product.imgSrc}
              alt=""
              class="object-cover w-full h-56"
            />
            <div class="py-4 px-8 flex flex-col h-full">
              <h2 class="text-3xl mb-4">{product.title}</h2>
              <p class="mb-4">{product.cardBody}</p>
              <div className="mt-auto">
                <Anchor href={product.href}>Try demo</Anchor>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
