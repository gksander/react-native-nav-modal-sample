import { create } from "tailwind-rn";
import styles from "./styles.json";
import { TwClass } from "./tw-class-string";

export const { tailwind } = create(styles);

export const tw = <S>(classList: Tailwind<S>) => tailwind(classList);
export const tw2 = (classList: TwClass[]) => tailwind(classList.join(" "));

type Tailwind<S> = S extends `${infer Class} ${infer Rest}`
  ? Class extends TwClass
    ? `${Class} ${Tailwind<Rest>}`
    : never
  : S extends `${infer Class}`
  ? Class extends TwClass
    ? S
    : never
  : never;
