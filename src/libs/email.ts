import emailjs from "@emailjs/browser";

export function sendEmail(values: Record<string, string>) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    values,
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  );
}
