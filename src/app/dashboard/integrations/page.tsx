import { Button } from "@/shadcn/components/ui/button";
import { faker } from "@faker-js/faker";
import { ReactNode } from "react";
import { BsPlugin } from "react-icons/bs";
import { FaAmazon, FaApple, FaFacebook, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function Integrations() {
  return (
    <div className="tw-h-dvh tw-bg-stone-100 dark:tw-bg-slate-900">
      <h1 className="tw-p-4 tw-text-2xl tw-font-bold">Integrations</h1>
      <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-p-4">
        <PluginCard name="Google" icon={<FaGoogle />} />
        <PluginCard name="Facebook" icon={<FaFacebook />} />
        <PluginCard name="Github" icon={<FaGithub />} />
        <PluginCard name="Microsoft" icon={<FaMicrosoft />} />
        <PluginCard name="Amazon" icon={<FaAmazon />} />
        <PluginCard name="Apple" icon={<FaApple />} />
      </div>
    </div>
  );
}

function PluginCard({name, icon} : {name: string, icon: ReactNode}) {
  return (
    <div className="tw-h-60 tw-rounded tw-border tw-border-slate-400 tw-bg-slate-200 tw-shadow dark:tw-border-slate-600 dark:tw-bg-slate-800">
      <span className="tw-text-300 tw-flex tw-select-none tw-items-center tw-gap-4 tw-p-4 tw-text-2xl dark:tw-text-slate-300">
        {icon} {name}
      </span>
      <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4 tw-h-full">
        <span className="tw-text-center tw-h-1/3 tw-mb-4">{faker.lorem.sentences(2)}</span>
        <Button className="tw-flex tw-gap-4">
          <BsPlugin /> Integrate
        </Button>
      </div>
    </div>
  );
}
