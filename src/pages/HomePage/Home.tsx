import { IconShoppingCartFilled, IconWorld } from "@tabler/icons-react";
import Button from "../../components/Button";

function Title() {
  return (
    <div className="flex basis-1/2 flex-col gap-6">
      <h2 className="big-title text-black">Build your own website now</h2>
      <p className="trackin-[0.4px] text-grey font-sans text-xl leading-7">
        Build a website that keeps your audience coming back
      </p>
      <Button text="Get Started" className="mt-3" />
    </div>
  );
}

function Image() {
  return (
    <div className="relative h-[640px] basis-1/2">
      <div className="absolute left-12 top-10 z-10 flex items-center justify-center rounded-3xl bg-brand/30 p-7 backdrop-blur-sm">
        <IconShoppingCartFilled className="size-14 text-brand" />
      </div>
      <div className="absolute left-[543px] top-96 z-10 flex items-center justify-center rounded-3xl bg-brand/30 p-6 backdrop-blur-sm">
        <IconWorld className="size-14 text-brand" />
      </div>
      <div className="absolute left-[500px] top-0 z-10 flex w-44 flex-wrap gap-4">
        {Array.from({ length: 64 }).map((_, index) => (
          <span
            key={index}
            className="bg-white-grey h-2 w-2 rounded-full"
          ></span>
        ))}
      </div>
      <span className="bg-green absolute left-[540px] top-[540px] z-10 size-11 rounded-full"></span>
      <span className="bg-yellow absolute left-0 top-40 z-10 size-7 rounded-full"></span>
      <span className="bg-purple absolute left-24 top-[520px] z-10 size-28 rounded-full"></span>
      <img
        src="/Hero.jpg"
        alt="hero"
        className="absolute left-1/2 top-1/2 size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full rounded-tr-none object-cover"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-12">
      <div className="px-18 flex items-center pb-36">
        <Title />
        <Image />
      </div>
    </div>
  );
}
