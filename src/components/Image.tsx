import { ImgHTMLAttributes } from "react";
import { Helmet } from "react-helmet";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {};

export default function Image(props: ImageProps) {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={props.src} />
      </Helmet>
      <img {...props} />
    </>
  );
}
