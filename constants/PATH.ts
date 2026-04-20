export type PathType = string | ((id: unknown) => string);

export const PATH = {
  hash: "#",
  home: "/",
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  // PodcastTranscript: (id: unknown) => `/podcast/transcript/${id}`,
} as const satisfies Record<string, PathType>;

export const PROTECTED_PATH = {
  dashboard: "/dashboard",
} as const satisfies Record<string, PathType>;
