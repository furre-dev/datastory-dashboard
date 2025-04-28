import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

export default function MainLink(props: LinkProps & { children: ReactNode }) {
  return (
    <Link
      className="bg-ds-dark text-white px-5 py-2 rounded-lg max-w-max mt-5 font-bold
                  md:py-5 md:rounded-2xl md:text-2xl md:px-10 md:mt-14
                  hover:rotate-3
                  transition-all duration-150"
      href={props.href}>
      {props.children}
    </Link>
  )
}