export interface MenuItem {
  label: string;
  path: string;
  Icon?: React.ReactNode;
  badgeValue?: unknown;
  badgeLabel?: unknown;
}
export interface OptionItem {
  label: string;
  value: string;
  disabled?: boolean;
  item?: unknown;
}
export interface BaseInput {
  name: string;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export type PageLayout = Readonly<{
  children: React.ReactNode;
}>;

export interface PageParams<T extends string | string[] = string> {
  params: Promise<{ slug: T }>;
  searchParams: Promise<{ [key: string]: T | undefined }>;
}
export interface PageIdParams<T extends string | string[] = string> {
  params: Promise<{ id: T }>;
  searchParams: Promise<{ [key: string]: T | undefined }>;
}

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
