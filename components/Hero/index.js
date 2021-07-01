import { Button } from "components/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-7xl font-semibold">Countable</h1>
      <p className="text-xl">
        🤖 Countable is a small, robust bot to help support and manage a
        counting channel in your Discord server!
      </p>
      <div className="flex gap-x-4">
        <Button link="https://invite.countable.cc">Invite Countable</Button>
        <Button link="https://www.buymeacoffee.com/benslv">Donate</Button>
      </div>
    </div>
  );
};
