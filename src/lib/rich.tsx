import { Fragment, type ReactNode } from "react";

/** Zmení **text** na <b>text</b>. Texty tak ostanú v obsahu čisté a bez JSX. */
export function rich(text: string): ReactNode {
  return text.split("**").map((part, i) => (i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>));
}
