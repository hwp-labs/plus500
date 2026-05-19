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

export type RouteIdParams<T extends string | number = string> = {
  params: Promise<{ id: T }>;
};
