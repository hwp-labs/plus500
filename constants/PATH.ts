export type PathType = string | ((id: unknown) => string);

export const PATH = {
  hash: "#",
  home: "/",
  login: "/login",
  register: "/register",
  registerDemo: "/register?demo=true",
  forgotPassword: "/forgot-password",
  // PodcastTranscript: (id: unknown) => `/podcast/transcript/${id}`,
} as const satisfies Record<string, PathType>;

export const PATH_PROTECTED = {
  hash: "#",
  dashboard: "/trade",
  trade: "/trade",
  orders: "/orders",
  funds: "/funds",
  openPositions: "/open-positions",
  closedPositions: "/closed-positions",
  insights: "/insights",
} as const satisfies Record<string, PathType>;
