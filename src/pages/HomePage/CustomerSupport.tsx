import Button from "../../components/Button";
import Image from "../../components/Image";

function Left() {
  return (
    <div className="relative h-[700px] w-[676px]">
      <span className="absolute left-[332px] top-[103px] z-10 size-6 rounded-full bg-green"></span>
      <span className="absolute left-[611px] top-[561px] z-10 size-6 rounded-full bg-purple"></span>
      <Image
        src="/CustomerSupport.jpg"
        alt="customer support"
        className="absolute left-[125px] top-[162px] z-20 size-[500px] rounded-full rounded-tl-none object-cover"
      />
      <span className="absolute left-[-37px] top-0 z-10 size-80 rounded-full bg-white-grey"></span>
      <div className="absolute left-[111px] top-[523px] z-10 flex w-44 flex-wrap gap-4">
        {Array.from({ length: 64 }).map((_, index) => (
          <span
            key={index}
            className="h-2 w-2 rounded-full bg-white-grey"
          ></span>
        ))}
      </div>
      <span className="absolute left-[76px] top-[607px] size-19 rounded-full bg-yellow"></span>
    </div>
  );
}

function Right() {
  return (
    <div className="mr-25 flex max-w-[500px] flex-col gap-12">
      <div className="flex flex-col gap-6">
        <h2 className="font-sans text-xl uppercase leading-7 tracking-[0.4px] text-grey">
          Customer Service
        </h2>
        <h3 className="heading-1 text-black">
          24/7 Integrated Customer Support
        </h3>
        <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
          Our customer support are always ready to help your problems 24/7. Any
          question? Contact us
        </p>
      </div>
      <Button text="Contact us" />
    </div>
  );
}

export default function CustomerSupport() {
  return (
    <div className="relative flex w-full items-center justify-between">
      <Left />
      <Right />
    </div>
  );
}
