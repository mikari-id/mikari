import {
  IconChevronRight,
  IconShoppingCartFilled,
  IconUmbrellaFilled,
  IconWorld,
  TablerIcon,
} from "@tabler/icons-react";
import Button from "../../components/Button";

type ServiceProps = {
  icon: TablerIcon;
  name: string;
  description: string;
};

function Service(props: ServiceProps) {
  return (
    <div className="flex basis-1/3 flex-col items-center gap-6 p-6">
      <div className="flex rounded-2xl bg-brand/15 p-6">
        <props.icon className="size-12 text-brand" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h3 className="heading-4 text-center text-black">{props.name}</h3>
        <p className="text-grey text-center font-sans text-xl leading-7 tracking-[0.4px]">
          {props.description}
        </p>
        <Button
          type="text only"
          text="Learn more"
          iconTrailing={IconChevronRight}
        />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="flex w-full flex-col items-center gap-7 px-20 py-12">
      <div className="flex flex-col items-center gap-6">
        <h2 className="heading-1 text-black">Our Services</h2>
        <p className="text-grey font-sans text-xl leading-7 tracking-[0.4px]">
          We have several service you can choose. Let&apos;s check it out guys
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <Service
          icon={IconWorld}
          name="Landing Page"
          description="We create a landing page website that is suitable for your business"
        />
        <Service
          icon={IconShoppingCartFilled}
          name="E-commerce"
          description="We build a good and quality e-commerce website"
        />
        <Service
          icon={IconUmbrellaFilled}
          name="Public Service"
          description="We create a public service website that is easily accessible"
        />
      </div>
    </div>
  );
}
