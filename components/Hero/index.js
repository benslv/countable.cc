import { Button } from "components/Button";
import { Example } from "components/Example";
import { Text } from "components/Text";
import { Heading } from "components/Heading";

export const Hero = () => {
  return (
    <div className="flex gap-x-4 items-center justify-evenly h-full">
      <div className="flex flex-col gap-y-6 max-w-xl">
        <Heading as="h1" size="2">
          Countable
        </Heading>
        <Text>
          Countable is a small, robust bot to help support and manage a counting
          channel in your Discord server!
        </Text>
        <div className="flex gap-x-4">
          <Button
            link="https://invite.countable.cc"
            className="bg-indigo-500 hover:bg-indigo-600"
            color="discord"
          >
            Invite Countable
          </Button>
          <Button link="https://www.buymeacoffee.com/benslv">Donate</Button>
        </div>
      </div>
      {/* <Example /> */}
    </div>
  );
};
