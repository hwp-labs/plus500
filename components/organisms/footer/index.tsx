import Image from "next/image";
//
import { SocialLinks } from "./social-links";
import { SiteLinks } from "./site-links";

export const Footer = () => {
  return (
    <footer className="bg-[#07183d] px-2 pt-15 pb-20 lg:pb-0 text-white lg:min-h-[700px] lg:px-0 lg:pt-25">
      <div className="container flex flex-wrap gap-10">
        <SiteLinks />
        <div className="lg:w-[640px] lg:pr-20">
          {renderArticle}
          <p className="mt-5">Web-Platform</p>
          <address className="flex-cs mt-10 gap-2">
            <Image src="/images/icon-ssl.png" alt="" width={24} height={24} />
            Secured by SSL. Copyright © Plus500. All rights reserved.
          </address>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};

const renderArticle = (
  <article className="leading-5">
    IMPORTANT: Trading in futures and options carries substantial risk of loss
    and is not suitable for every investor. The valuation of futures and options
    contracts may fluctuate rapidly and unpredictably, and, as a result, clients
    may lose more than their original investments. In no event should the
    content of this website be construed as an express or implied promise or
    guarantee by or from Plus500US Financial Services LLC that you will profit
    or that losses can or will be limited in any manner whatsoever. Market
    volatility, trade volume, and system availability may delay account access
    and trade executions. Past results are no indication of future performance.
    Information provided in this correspondence is intended solely for
    informational purposes and is obtained from sources believed to be reliable.
    Information is in no way guaranteed. The trading of futures is available
    through Plus500US Financial Services LLC d/b/a Plus500, a Futures Commission
    Merchant registered with the US Commodity Futures Trading Commission and a
    member of the National Futures Association (NFA ID number 0001398).
    Plus500US Financial Services LLC is a wholly-owned subsidiary of Plus500US
    Inc. Trading privileges subject to review and approval. Not all applicants
    will qualify. Information collected on account applications will be used to
    verify an applicant's identity, as required under Federal law.
  </article>
);
