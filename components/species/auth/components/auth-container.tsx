import { PropsWithChildren } from "react";
import { LiveSupportWidget } from "./live-support-widget";

interface Props extends PropsWithChildren {
  h1?: string;
  p?: string;
  err?: React.ReactNode;
}

export const AuthContainer = ({ children, h1, p, err }: Props) => {
  return (
    <main className="border-ash3 mx-auto max-w-[640px] sm:mt-10 sm:border sm:shadow-lg">
      <hgroup className="text-primary space-y-2 text-center px-5">
        {h1 ? <h1 className="text-[26px] font-medium mt-4 lg:mt-8">{h1}</h1> : null}
        {p ? <p className="leading-5">{p}</p> : null}
      </hgroup>
      <form className="space-y-4 px-6 py-2.5 pb-10 sm:px-10 sm:py-5">
        {children}
      </form>
      <LiveSupportWidget />
    </main>
  );
};
