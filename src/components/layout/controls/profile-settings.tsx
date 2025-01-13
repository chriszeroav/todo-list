import { FC } from "react";
import { ChevronDown } from "../../../icons";

interface ProfileSettingsProps {}

export const ProfileSettings: FC<ProfileSettingsProps> = () => {
  return (
    <div className="flex items-center gap-2 py-5">
      <img
        className="size-8 rounded-full object-cover"
        src="/profile.jpg"
        alt="Perfil"
      />
      <span className="text-sm font-light flex-1">Christopher Romero</span>
      <ChevronDown className="size-4 text-neutral-400" />
    </div>
  );
};
