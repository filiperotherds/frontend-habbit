import { Notification } from "./notification";
import { ProfileButtonDesktop } from "./profile/profile-button-desktop";

export function Header() {
  return (
    <div className="md:sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between bg-secondary">
      <div className="flex h-8">
        <img src="/rabbit-logo.png" alt="logo" />
      </div>

      <div className="flex items-center">
        <Notification />
        <div className="hidden md:flex md:ml-8">
          <ProfileButtonDesktop />
        </div>
      </div>
    </div>
  );
}
