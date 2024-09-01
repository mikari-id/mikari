import { useState } from "react";
import { twJoin } from "tailwind-merge";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { sendEmail } from "../../libs/email";

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (status === "mengirim") return;

        setStatus("mengirim");
        sendEmail(values)
          .then(() => setStatus("terkirim"))
          .catch(() => setStatus("gagal"));
      }}
      className="rounded-4xl z-10 flex w-full flex-col gap-12 bg-white px-18 py-12 shadow-lg"
    >
      <div className="grid w-full grid-cols-2 gap-12">
        <Input
          name="name"
          label="Name"
          required
          type="text"
          placeholder="Your full name"
          value={values.name}
          onChange={(name) => setValues((prev) => ({ ...prev, name }))}
        />
        <Input
          name="email"
          label="Email"
          required
          type="email"
          placeholder="Your email"
          value={values.email}
          onChange={(email) => setValues((prev) => ({ ...prev, email }))}
        />
      </div>
      <div className="grid w-full grid-cols-2 gap-12">
        <Input
          name="phone"
          label="Phone"
          required
          type="tel"
          placeholder="Your phone number"
          value={values.phone}
          onChange={(phone) => setValues((prev) => ({ ...prev, phone }))}
        />
        <Input
          name="subject"
          label="Subject"
          required
          type="text"
          placeholder="Subject"
          value={values.subject}
          onChange={(subject) => setValues((prev) => ({ ...prev, subject }))}
        />
      </div>
      <TextArea
        name="message"
        label="Message"
        required
        placeholder="Write your message"
        value={values.message}
        onChange={(message) => setValues((prev) => ({ ...prev, message }))}
      />
      <Button text="Send!" className="w-full" />
      <p
        className={twJoin(
          "text-center font-sans text-xl font-medium leading-7 tracking-[0.4px] text-brand",
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
