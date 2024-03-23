import { Anchor } from "../components/Anchor.tsx";
import { productConfigMap } from "../app.config.ts";

export default function Home() {
  return (
    <div>
      <div class="px-4 py-8 mx-auto bg-teal">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold text-white">Tink Link Demo</h1>
        </div>
      </div>
      <div class="container mx-auto flex flex-row gap-4 py-8">
        {Object.values(productConfigMap).map((product) => (
          <div class="basis-1/2 bg-white rounded-xl shadow-lg flex flex-col space-x-4 overflow-hidden">
            <img
              src={product.imgSrc}
              alt=""
              class="object-cover w-full h-56"
            />
            <div class="p-4">
              <h2 class="text-3xl">{product.title}</h2>
              <p class="mb-4">{product.cardBody}</p>
              <Anchor href={product.href}>Try demo</Anchor>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
