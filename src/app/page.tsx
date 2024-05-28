"use client";

import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";

import { Item } from "./item";
import { useIntersectionObserver } from "./useIntersectionObserver";

const texts = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Radix",
  "ESLint",
  "Prettier",
  "Jest",
  "React Testing Library",
  "Cypress",
  "GitHub Actions",
];

export default function Home() {
  const [intersectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0,
  });

  console.log(isIntersecting);

  return (
    <div className="h-dvh overflow-hidden">
      <Root className="overflow-hidden h-full">
        <Viewport className="w-full h-full">
          <div className="container max-w-[800px]">
            {texts.map((item, i) => (
              <Item key={i} text={item} />
            ))}
          </div>
          <div className="h-20" ref={intersectionRef}></div>
        </Viewport>
        <Scrollbar className="flex select-none p-px w-2 hover:bg-blue-50" orientation="vertical">
          <Thumb className="flex-1 bg-blue-100" />
        </Scrollbar>
      </Root>
    </div>
  );
}
