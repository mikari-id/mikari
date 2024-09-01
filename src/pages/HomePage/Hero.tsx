import { IconShoppingCartFilled, IconWorld } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex basis-1/2 flex-col gap-6">
      <h2 className="big-title text-black">Build your own website now</h2>
      <p className="trackin-[0.4px] font-sans text-xl leading-7 text-grey">
        Build a website that keeps your audience coming back
      </p>
      <Button
        text="Get Started"
        className="mt-3"
        onClick={() => navigate("/order")}
      />
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
            className="h-2 w-2 rounded-full bg-white-grey"
          ></span>
        ))}
      </div>
      <span className="absolute left-[540px] top-[540px] z-10 size-11 rounded-full bg-green"></span>
      <span className="absolute left-0 top-40 z-10 size-7 rounded-full bg-yellow"></span>
      <span className="absolute left-24 top-[520px] z-10 size-28 rounded-full bg-purple"></span>
      <img
        src="/Hero.jpg"
        alt="hero"
        className="absolute left-1/2 top-1/2 size-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full rounded-tr-none object-cover"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-12">
      <div className="flex items-center px-18 pb-36">
        <Title />
        <Image />
      </div>
    </div>
  );
}
