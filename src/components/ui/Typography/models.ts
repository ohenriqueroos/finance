type TVariant =
  | "title"
  | "title2"
  | "title3"
  | "title4"
  | "paragrapth"
  | "blockquote"
  | "small"
  | "large";

export interface ITypography {
  variant?: TVariant;
  children: string;
}
