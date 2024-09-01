import {
  IconChevronRight,
  IconSchool,
  IconShoppingCartFilled,
  IconUserFilled,
  TablerIcon,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

type ServiceProps = {
  icon: TablerIcon;
  name: string;
  description: string;
};

function Service(props: ServiceProps) {
  const navigate = useNavigate();

  return (
    <div className="flex basis-1/3 flex-col items-center gap-6 p-6">
      <div className="flex rounded-2xl bg-brand/15 p-6">
        <props.icon className="size-12 text-brand" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h3 className="heading-4 text-center text-black">{props.name}</h3>
        <p className="text-center font-sans text-xl leading-7 tracking-[0.4px] text-grey">
          {props.description}
        </p>
        <Button
          type="text only"
          text="Learn more"
          iconTrailing={IconChevronRight}
          onClick={() => navigate("/pricing", { replace: true })}
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
        <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
          We offer a range of exceptional services to meet your needs. Whether
          you're looking to showcase your work with a stunning portfolio, build
          a successful e-commerce website, or create an engaging educational
          platform, we've got you covered. Let's explore our services and bring
          your ideas to life!
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <Service
          icon={IconUserFilled}
          name="Portfolio"
          description="Showcase your work and impress your audience with a captivating portfolio."
        />
        <Service
          icon={IconShoppingCartFilled}
          name="E-commerce"
          description="Build a high-quality and user-friendly e-commerce website to boost your online business."
        />
        <Service
          icon={IconSchool}
          name="Educational Platform"
          description="Create an interactive and engaging educational platform to facilitate learning and knowledge sharing."
        />
      </div>
    </div>
  );
}
