export type ColorVariantType =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "danger";

export enum ColorVariantEnum {
  DEFAULT = "default",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

export const colorVariantBg = (variant: ColorVariantType = "danger") =>
  ({
    default: "bg-primary",
    info: "bg-info",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
  })[variant];

export const colorVariantText = (variant: ColorVariantType = "danger") =>
  ({
    default: "text-primary",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  })[variant];
