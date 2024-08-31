import {
  IconArrowRight,
  IconHeadphonesFilled,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

export default function ContactPage() {
  return (
    <div className="relative flex flex-col items-center gap-18 p-18">
      <span className="h-135 absolute left-0 top-0 w-full bg-brand"></span>
      <div className="w-150 z-10 flex flex-col items-center gap-6 text-center text-white">
        <h2 className="heading-1">Contact Us</h2>
        <p className="font-sans text-xl leading-7 tracking-[0.4px]">
          Have a question or just want to say hi? Don&apos;t bother, we'd love
          to hear from you.
        </p>
      </div>
      <form className="rounded-4xl z-10 flex w-full flex-col gap-12 bg-white px-18 py-12 shadow-lg">
        <div className="flex w-full gap-12">
          <Input
            name="name"
            label="Name"
            required
            type="text"
            placeholder="Your full name"
            className="basis-1/2"
          />
          <Input
            name="email"
            label="Email"
            required
            type="email"
            placeholder="Your email"
            className="basis-1/2"
          />
        </div>
        <div className="flex w-full gap-12">
          <Input
            name="phone"
            label="Phone"
            required
            type="tel"
            placeholder="Your phone number"
            className="basis-1/2"
          />
          <Input
            name="subject"
            label="Subject"
            required
            type="text"
            placeholder="Subject"
            className="basis-1/2"
          />
        </div>
        <TextArea
          name="message"
          label="Message"
          required
          placeholder="Write your message"
          className="w-full"
        />
        <Button text="Send" className="w-full" />
      </form>
      <div className="grid w-full grid-cols-3 gap-4">
        <div className="flex w-full flex-col gap-12 p-6">
          <IconMailFilled className="size-18 text-brand" />
          <div className="flex flex-col gap-4">
            <h2 className="heading-4 text-black">Email</h2>
            <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
              Email us for help with a current product or service
            </p>
            <Link
              to="mailto:mikariteam@gmail.com"
              className="font-sans text-lg font-semibold leading-7 tracking-[0.36px] text-brand"
            >
              mikariteam@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 p-6">
          <IconPhoneFilled className="size-18 text-brand" />
          <div className="flex flex-col gap-4">
            <h2 className="heading-4 text-black">Call</h2>
            <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
              Call us to speak to a member of our team.
            </p>
            <Link
              to=""
              className="font-sans text-lg font-semibold leading-7 tracking-[0.36px] text-brand"
            >
              +62 852 1860 6125
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 p-6">
          <IconHeadphonesFilled className="size-18 text-brand" />
          <div className="flex flex-col gap-4">
            <h2 className="heading-4 text-black">Help & Support</h2>
            <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
              Check out helpful resources, FAQs and developer tools.
            </p>
            <Button text="Support Center" iconTrailing={IconArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
