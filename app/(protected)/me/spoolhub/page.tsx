import CollectionCard from "@/components/dashboard/components/collection";
import EditButton from "@/components/dashboard/components/edit-button";
import HubLinks from "@/components/dashboard/components/hub-links";
import InstagramCard from "@/components/dashboard/components/instagram-card";
import PhotoPicker from "@/components/dashboard/components/photo-picker";
import TextBlock from "@/components/dashboard/components/text-block";
import TweetCard from "@/components/dashboard/components/tweet-card";
import MainEditor from "@/components/dashboard/editor/main-editor";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Textarea } from "@/components/ui/textarea";
import {
  DevToLogoIcon,
  FacebookLogoIcon,
  GithubLogoIcon,
  GoogleLogoIcon,
  MicrosoftOutlookLogoIcon,
  ShareIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Spoolhub() {
  const instagramPhotos = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="flex min-h-dvh w-full items-start justify-center py-5 px-4 sm:px-6 md:px-8">
      <FieldSet className="w-full max-w-3xl">
        <FieldGroup>
          <Field>
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-2xl relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1773578978637-c9771e7a9913?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute bottom-2 right-2">
                {/*<Button size={"icon"} variant={"secondary"}>
                  <PenIcon />
                </Button>*/}
                <EditButton
                  size={"icon"}
                  variant={"secondary"}
                  title="Edit banner"
                  desc="Edit your banner"
                  iconOnly
                >
                  <PhotoPicker />
                </EditButton>
              </div>
            </AspectRatio>
            <Item>
              <ItemMedia>
                <Avatar className="size-20">
                  <AvatarImage
                    src={"https://github.com/shadcn.png"}
                    alt="user image"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>John Doe</ItemTitle>
                <ItemDescription>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor
                  sit amet consectetur adipiscing elit quisque faucibus.
                </ItemDescription>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <Button size={"icon-sm"} variant={"outline"}>
                    <XLogoIcon />
                  </Button>
                  <Button size={"icon-sm"} variant={"outline"}>
                    <GoogleLogoIcon />
                  </Button>
                  <Button size={"icon-sm"} variant={"outline"}>
                    <MicrosoftOutlookLogoIcon />
                  </Button>
                  <Button size={"icon-sm"} variant={"outline"}>
                    <GithubLogoIcon />
                  </Button>
                  <Button size={"icon-sm"} variant={"outline"}>
                    <FacebookLogoIcon />
                  </Button>
                  <Button size={"icon-sm"} variant={"outline"}>
                    <DevToLogoIcon />
                  </Button>
                </div>
              </ItemContent>
              <ItemActions>
                <EditButton
                  title="Edit Profile"
                  desc="Edit your profile"
                  size={"sm"}
                  variant={"ghost"}
                >
                  <Item className="p-0">
                    <ItemMedia className="relative">
                      <Avatar className="size-20">
                        <AvatarImage src={"https://github.com/shadcn.png"} />
                      </Avatar>
                      <div className="absolute bottom-0 right-0">
                        <EditButton
                          title="Edit Profil Picture"
                          desc="edit the profile picture"
                          iconOnly
                          size={"icon-xs"}
                        >
                          <PhotoPicker />
                        </EditButton>
                      </div>
                    </ItemMedia>
                    <ItemContent>
                      <Input placeholder="Name" defaultValue={"John Doe"} />
                      <Textarea
                        placeholder="Bio"
                        className="no-scrollbar"
                        defaultValue={
                          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                        }
                      />
                    </ItemContent>
                  </Item>
                </EditButton>
              </ItemActions>
            </Item>
            <FieldGroup>
              <div className="flex w-full flex-col sm:flex-row gap-2">
                <Button size={"sm"} className="w-full sm:w-auto">
                  Add Link
                </Button>
                <Button size={"sm"} className="w-full sm:w-auto">
                  Add Text Block
                </Button>
                <Button size={"sm"} className="w-full sm:w-auto">
                  Create Collection
                </Button>
                <Button size={"icon-sm"} variant={"outline"}>
                  <ShareIcon />
                </Button>
              </div>
            </FieldGroup>
            <FieldSeparator />
            <FieldGroup>
              {/* Text Block */}
              <Field>
                {/* Main Editor */}
                <MainEditor />
                {/* Child */}
                <TextBlock />
              </Field>
              {/* Links */}
              <Field>
                <HubLinks
                  linkDesc="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                  linkName="John Doe"
                  linkUrl="example.com"
                  linkFavi="https://www.google.com/s2/favicons?domain=example.com"
                />
              </Field>
              {/* Collections */}
              <Field>
                <CollectionCard
                  title="My Collections"
                  description="Responsive Instagram card variants with size and photo layout presets."
                >
                  <div className="grid gap-4 md:grid-cols-2 items-start">
                    <InstagramCard
                      className="sm:max-w-full"
                      size={"sm"}
                      photoLayout={4}
                      profileName={"John Doe"}
                      description={
                        "Extra-large gallery layout showing four photos in one card."
                      }
                      photos={instagramPhotos}
                    />
                    <TweetCard
                      className="sm:max-w-full"
                      size={"sm"}
                      bio="Extra-large gallery layout showing four photos in one card."
                      tweet="Hello world"
                      profileName={"John Doe"}
                      media={instagramPhotos}
                      likes={30000}
                      retweets={4000}
                      replies={5000}
                      timestamp="Nov 15, 2024 • 2:30 PM"
                      avatarSrc="https://github.com/shadcn.png"
                    />
                  </div>
                </CollectionCard>
              </Field>
            </FieldGroup>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
