import { cn } from "@/lib/utils";
import { ITypography } from "./models";

const Typography = ({ variant, children, className }: ITypography) => {
  switch (variant) {
    case "title":
      return (
        <h1
          className={cn(
            "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
            className
          )}
        >
          {children}
        </h1>
      );
    case "title2":
      return (
        <h2
          className={cn(
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
            className
          )}
        >
          {children}
        </h2>
      );
    case "title3":
      return (
        <h3
          className={cn(
            "scroll-m-20 text-2xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h3>
      );
    case "title4":
      return (
        <h4
          className={cn(
            "scroll-m-20 text-xl font-semibold tracking-tight",
            className
          )}
        >
          {children}
        </h4>
      );
    case "blockquote":
      return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
          {children}
        </blockquote>
      );
    case "large":
      return (
        <div className={cn("text-lg font-semibold", className)}>{children}</div>
      );
    case "small":
      return (
        <small className={cn("text-sm font-medium leading-none", className)}>
          {children}
        </small>
      );
    case "paragrapth":
      return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
          {children}
        </p>
      );
    default:
      return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
          {children}
        </p>
      );
  }
};

export default Typography;
