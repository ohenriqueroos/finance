import { ITypography } from "./models";

const Typography = ({ variant, children }: ITypography) => {
  switch (variant) {
    case "title":
      return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {children}
        </h1>
      );
    case "title2":
      return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {children}
        </h2>
      );
    case "title3":
      return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {children}
        </h3>
      );
    case "title4":
      return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {children}
        </h4>
      );
    case "blockquote":
      return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {children}
        </blockquote>
      );
    case "large":
      return <div className="text-lg font-semibold">{children}</div>;
    case "small":
      return (
        <small className="text-sm font-medium leading-none">{children}</small>
      );
    case "paragrapth":
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
    default:
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
  }
};

export default Typography;
