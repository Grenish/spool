import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowUUpLeftIcon,
  ArrowUUpRightIcon,
  EyeIcon,
  ImageIcon,
  LinkIcon,
  ListBulletsIcon,
  ListNumbersIcon,
  TextBolderIcon,
  TextHOneIcon,
  TextHTwoIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function EditorToolbar() {
  return (
    <TooltipProvider>
      <CardHeader className="flex items-center">
        <ToggleGroup variant={"outline"} type="multiple" size={"sm"}>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <TextBolderIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <TextItalicIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <TextUnderlineIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Underline</TooltipContent>
          </Tooltip>
        </ToggleGroup>
        <ToggleGroup variant={"outline"} size={"sm"} type={"single"}>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="hOne" aria-label="Toggle heading one">
                <TextHOneIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Heading 1</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="hTwo" aria-label="Toggle heading two">
                <TextHTwoIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Heading 2</TooltipContent>
          </Tooltip>
        </ToggleGroup>
        <ToggleGroup variant={"outline"} size={"sm"} type={"single"}>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem
                value="list dash"
                aria-label="Toggle bullet list"
              >
                <ListBulletsIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Bullet List</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem
                value="list number"
                aria-label="Toggle number list"
              >
                <ListNumbersIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Numbered List</TooltipContent>
          </Tooltip>
        </ToggleGroup>
        <ToggleGroup variant={"outline"} size={"sm"} type={"single"}>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="link" aria-label="Toggle link">
                <LinkIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Link</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="image" aria-label="Add/insert image">
                <ImageIcon />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>Image</TooltipContent>
          </Tooltip>
        </ToggleGroup>
        <Select defaultValue="default">
          <SelectTrigger size="sm">
            <SelectValue placeholder="Fonts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="roboto">Roboto</SelectItem>
            <SelectItem value="montserrat">Montserrat</SelectItem>
            <SelectItem value="lato">Lato</SelectItem>
            <SelectItem value="noto-sans">Noto Sans</SelectItem>
            <SelectItem value="funnel-display">Funnel Display</SelectItem>
            <SelectItem value="pacifico">Pacifico</SelectItem>
            <SelectItem value="comic-neue">Comic Neue</SelectItem>
            <SelectItem value="ibm-plex-sans">IBM Plex Sans</SelectItem>
            <SelectItem value="ibm-plex-serif">IBM Plex Serif</SelectItem>
          </SelectContent>
        </Select>
        <ButtonGroup>
          <ButtonGroup>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"icon-sm"} variant={"outline"} aria-label="Undo">
                  <ArrowUUpLeftIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size={"icon-sm"} variant={"outline"} aria-label="Redo">
                  <ArrowUUpRightIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </ButtonGroup>
          <ButtonGroup>
            <ToggleGroup type="single" size={"sm"} variant={"outline"}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ToggleGroupItem value="eye" aria-label="Preview">
                    <EyeIcon />
                  </ToggleGroupItem>
                </TooltipTrigger>
                <TooltipContent>Preview</TooltipContent>
              </Tooltip>
            </ToggleGroup>
          </ButtonGroup>
        </ButtonGroup>
      </CardHeader>
    </TooltipProvider>
  );
}
