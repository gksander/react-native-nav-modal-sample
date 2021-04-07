import * as React from "react";
import { TwClass } from "./tw-class-string";
import { tw2 } from "./tw";

export const useTwStyles = (list: TwClass[]) =>
  React.useMemo(() => tw2(list), [list]);
