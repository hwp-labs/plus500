import {
  IconSettings,
  IconHelpCircle,
  IconToolsOff,
  IconUser,
  IconCalendarDollar,
  IconNews,
  IconBell,
  IconFileDescription,
  IconUsers,
  IconUserCog,
  IconShieldCog,
  IconBellCog,
} from "@tabler/icons-react";
import { AccordionItem } from "./item";

export const Accordion = () => {
  return (
    <div className="flex-col-xx gap-2.5">
      <AccordionItem
        Icon={IconUser}
        label="Account"
        data={[{ Icon: IconUsers, label: "Invite a Friend" }]}
      />
      <AccordionItem
        Icon={IconToolsOff}
        label="Tools"
        data={[
          { Icon: IconCalendarDollar, label: "Economic Calendar" },
          { Icon: IconNews, label: "Market News" },
          { Icon: IconBell, label: "Alerts" },
          { Icon: IconFileDescription, label: "Reports" },
        ]}
      />
      <AccordionItem Icon={IconHelpCircle} label="Help" />
      <AccordionItem
        Icon={IconSettings}
        label="Settings"
        data={[
          { Icon: IconUserCog, label: "Privacy Settings" },
          { Icon: IconShieldCog, label: "Security Settings" },
          { Icon: IconBellCog, label: "Notification Settings" },
          { Icon: IconBellCog, label: "Display Settings" },
        ]}
      />
    </div>
  );
};
