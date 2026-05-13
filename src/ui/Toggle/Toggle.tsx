import { useId, type InputHTMLAttributes } from "react";
import styles from "./Toggle.module.scss";

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Toggle = ({ checked, onChange, ...props }: ToggleProps) => {
  const id = useId();

  return (
    <>
      <input
        type="checkbox"
        className={styles.toggle}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...props}
      />
      <label htmlFor={id}></label>
    </>
  );
};
