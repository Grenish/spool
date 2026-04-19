import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Item, ItemContent } from "@/components/ui/item";
import {
  ImageIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function PhotoPicker() {
  return (
    <Item className="p-0">
      <ItemContent className="space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <Avatar className="size-24">
            <AvatarImage src={"https://github.com/shadcn.png"} />
          </Avatar>
          <div className="text-center">
            <h3 className="font-semibold text-lg">Profile Photo</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Select a photo from your preferred source
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full h-12 justify-start gap-3 text-base"
          >
            <ImageIcon weight="duotone" className="size-5 shrink-0" />
            <span>Import from Files</span>
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 justify-start gap-3 text-base"
          >
            <InstagramLogoIcon weight="duotone" className="size-5 shrink-0" />
            <span>Import from Instagram</span>
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 justify-start gap-3 text-base"
          >
            <XLogoIcon weight="duotone" className="size-5 shrink-0" />
            <span>Import from X (Twitter)</span>
          </Button>
        </div>
      </ItemContent>
    </Item>
  );
}
