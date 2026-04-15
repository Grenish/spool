import { GoogleLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function GoogleButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <GoogleLogoIcon weight="duotone" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Google</TooltipContent>
    </Tooltip>
  );
}
