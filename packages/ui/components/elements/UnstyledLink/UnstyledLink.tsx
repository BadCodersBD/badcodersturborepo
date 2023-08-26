import NextLink from "next/link"; // TODO - we shouldn't really have next specific things inside the ui folder
import type { ElementType, ReactNode } from "react";
import { forwardRef } from "react";

import { useIsExternalHref } from "../../hooks";

//this can be used to disable prefetching of linked pages, prefetching will still happen if the user hovers over a (Next) link.
const LINK_PREFETCH_ENABLED =
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  process.env.NEXT_PUBLIC_LINK_PREFETCH_ENABLED === "true";

type ComponentProps = {
  component?: ElementType<JSX.IntrinsicElements["a"]>;
  href: string;
  onClick?: () => void;
  onFocus?: () => void;
  title?: string;
  tabIndex?: number;
  target?: string;
  rel?: string;
  children?: ReactNode;
};

type RenderProps = {
  href: string;
  render: ReactNode;
};

export type UnstyledLinkProps = ComponentProps | RenderProps;

type OptionalUnstyledLinkProps = { href?: string; children: ReactNode };
export function OptionalExternalUnstyledLink({
  href,
  children,
}: OptionalUnstyledLinkProps) {
  const isExternalHref = useIsExternalHref(href);

  if (!href) {
    return <>{children}</>;
  }

  const target = isExternalHref ? "_blank" : undefined;
  const rel = isExternalHref ? "nofollow" : undefined;

  return (
    <UnstyledLink href={href} rel={rel} target={target}>
      {children}
    </UnstyledLink>
  );
}

// eslint-disable-next-line react/display-name
export const UnstyledLink = forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  (props, ref) => {
    return (
      <NextLink href="#" passHref prefetch={LINK_PREFETCH_ENABLED}>
        {isRenderProps(props) ? (
          props.render
        ) : (
          <RenderComponent {...props} href="#" ref={ref} />
        )}
      </NextLink>
    );
  }
);

// eslint-disable-next-line react/display-name
const RenderComponent = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({ component: Component = "a", href, ...props }, ref) => (
    <Component {...props} href={href} ref={ref} />
  )
);

function isRenderProps(props: UnstyledLinkProps): props is RenderProps {
  return !!(props as RenderProps).render;
}
