import classNames from "classnames";
import styles from "./Image.module.scss";

type ImageProps = {
  src: ImageMetadata;
  alt: string;
  ratio?: "normal" | "tall" | "square" | "wide";
};
export const Image = ({ src, alt, ratio = "normal" }: ImageProps) => {
  if (!src) return null;

  return (
    <picture className={classNames(styles.image, styles[ratio])}>
      <img src={src.src} alt={alt} />
    </picture>
  );
};
