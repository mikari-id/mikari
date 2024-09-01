import emailjs from "@emailjs/browser";
import { FormEvent, useCallback, useState } from "react";
import { twJoin } from "tailwind-merge";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    false | "mengirim" | "terkirim" | "gagal"
  >(false);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      setStatus("mengirim");

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
        )
        .then(() => {
          setStatus("terkirim");
        })
        .catch((e) => {
          console.error(e);
          setStatus("gagal");
        });
    },
    [values],
  );

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-4xl z-10 flex w-full flex-col gap-12 bg-white px-18 py-12 shadow-lg"
    >
      <div className="flex w-full gap-12">
        <Input
          name="name"
          label="Name"
          required
          type="text"
          placeholder="Your full name"
          className="basis-1/2"
          value={values.name}
          onChange={(name) => setValues((prev) => ({ ...prev, name }))}
        />
        <Input
          name="email"
          label="Email"
          required
          type="email"
          placeholder="Your email"
          className="basis-1/2"
          value={values.email}
          onChange={(email) => setValues((prev) => ({ ...prev, email }))}
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
          value={values.phone}
          onChange={(phone) => setValues((prev) => ({ ...prev, phone }))}
        />
        <Input
          name="subject"
          label="Subject"
          required
          type="text"
          placeholder="Subject"
          className="basis-1/2"
          value={values.subject}
          onChange={(subject) => setValues((prev) => ({ ...prev, subject }))}
        />
      </div>
      <TextArea
        name="message"
        label="Message"
        required
        placeholder="Write your message"
        className="w-full"
        value={values.message}
        onChange={(message) => setValues((prev) => ({ ...prev, message }))}
      />
      <Button
        text={status === "mengirim" ? "Sending..." : "Send!"}
        className="w-full"
      />
      <p
        className={twJoin(
          "font-sans text-xl font-medium leading-7 tracking-[0.4px] text-brand",
          status === false && "hidden",
        )}
      >
        {status === "mengirim" && "Sending message..."}
        {status === "terkirim" && "Message sent successfully!"}
        {status === "gagal" && "Failed to send message, please try again."}
      </p>
    </form>
  );
}
