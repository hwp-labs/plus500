import { Content } from "./content";

export const FuturesAcademy = () => {
  return (
    <section>
      <div className="show-lg-block">
        <div className="absolute -top-30 z-2 w-full">
          <div className="container-md bg-[url('/images/cover-cme.png')] bg-contain bg-no-repeat">
            <div className="flex-col-cc h-[500px] w-[700px] px-20 text-white">
              <Content />
            </div>
          </div>
        </div>
      </div>
      <div className="hide-lg-block bg-primary mt-20 skew-y-4 overflow-clip rounded-l-4xl lg:skew-y-0">
        <div className="h-[200px] bg-[url('/images/cover-cme-mobile.png')] bg-cover -skew-y-4 lg:skew-y-0"></div>
        <div className="-skew-y-4 px-4 pb-18 text-white lg:skew-y-0">
          <Content />
        </div>
      </div>
    </section>
  );
};
