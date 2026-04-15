import { XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function XButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <XLogoIcon weight="duotone" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>X (Formerly Twitter)</TooltipContent>
    </Tooltip>
  );
}
