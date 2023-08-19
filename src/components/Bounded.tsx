import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp className={clsx("px-4 py-10 md:py-4 md:px-6 lg:py-16", className)} {...restProps}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}

export default Bounded;
