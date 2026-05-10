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
  home: "/trade",
  dashboard: "/trade",
  trade: "/trade",
  openPositions: "/open-positions",
  orders: "/orders",
  closedPositions: "/closed-positions",
  insights: "/insights",
  funds: "/funds",
  //
  transactions: "/transactions",
  users: "/users",
  settings: "/settings",
} as const satisfies Record<string, PathType>;
