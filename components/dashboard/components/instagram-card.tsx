import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type InstagramCardSize = "sm" | "md" | "lg" | "xl";
type InstagramPhotoLayout = 1 | 2 | 3 | 4;

type InstagramCardProps = {
  avatarSrc?: string;
  className?: string;
  description?: string;
  photoLayout?: InstagramPhotoLayout;
  photos?: string[];
  profileName?: string;
  size?: InstagramCardSize;
};

const DEFAULT_AVATAR = "https://github.com/shadcn.png";

const DEFAULT_PHOTOS = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
];

const sizeStyles: Record<
  InstagramCardSize,
  {
    avatar: string;
    button: "icon-xs" | "icon-sm" | "icon" | "icon-lg";
    card: string;
    cardSize: "default" | "sm";
    contentPadding: string;
    description: string;
    gap: string;
    itemSize: "default" | "sm";
    mediaRadius: string;
    title: string;
  }
> = {
  sm: {
    avatar: "size-9",
    button: "icon-xs",
    card: "sm:max-w-xs",
    cardSize: "sm",
    contentPadding: "px-4",
    description: "text-xs line-clamp-2",
    gap: "gap-1.5",
    itemSize: "sm",
    mediaRadius: "rounded-2xl",
    title: "text-sm",
  },
  md: {
    avatar: "size-10",
    button: "icon-sm",
    card: "sm:max-w-sm",
    cardSize: "default",
    contentPadding: "px-5",
    description: "text-sm line-clamp-2",
    gap: "gap-2",
    itemSize: "default",
    mediaRadius: "rounded-[1.35rem]",
    title: "text-sm",
  },
  lg: {
    avatar: "size-12",
    button: "icon",
    card: "sm:max-w-md",
    cardSize: "default",
    contentPadding: "px-6",
    description: "text-sm line-clamp-3",
    gap: "gap-2.5",
    itemSize: "default",
    mediaRadius: "rounded-[1.5rem]",
    title: "text-base",
  },
  xl: {
    avatar: "size-14",
    button: "icon-lg",
    card: "sm:max-w-xl",
    cardSize: "default",
    contentPadding: "px-6",
    description: "text-sm line-clamp-3",
    gap: "gap-3",
    itemSize: "default",
    mediaRadius: "rounded-[1.75rem]",
    title: "text-base",
  },
};

function getInitials(profileName: string) {
  return profileName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getLayoutPhotoClass(layout: InstagramPhotoLayout, index: number) {
  if (layout === 3 && index === 0) {
    return "row-span-2";
  }

  return "";
}

function getPhotos(photos: string[] | undefined, count: number) {
  return Array.from({ length: count }, (_, index) => {
    return photos?.[index] ?? DEFAULT_PHOTOS[index % DEFAULT_PHOTOS.length];
  });
}

export default function InstagramCard({
  avatarSrc = DEFAULT_AVATAR,
  className,
  description = "A responsive Instagram-style card with configurable photo layouts.",
  photoLayout = 1,
  photos,
  profileName = "John Doe",
  size = "md",
}: InstagramCardProps) {
  const styles = sizeStyles[size];
  const initials = getInitials(profileName);
  const visiblePhotos = getPhotos(photos, photoLayout);

  return (
    <Card
      size={styles.cardSize}
      className={cn(
        "w-full border border-border/60 bg-card/95 shadow-sm",
        styles.card,
        className,
      )}
    >
      <Item size={styles.itemSize} className="py-0">
        <ItemMedia>
          <Avatar className={styles.avatar}>
            <AvatarImage src={avatarSrc} alt={profileName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={styles.title}>{profileName}</ItemTitle>
          <ItemDescription className={styles.description}>
            {description}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            variant={"outline"}
            size={styles.button}
            aria-label="Open Instagram card"
          >
            <InstagramLogoIcon weight="duotone" />
          </Button>
        </ItemActions>
      </Item>
      <CardContent className={styles.contentPadding}>
        <AspectRatio ratio={1 / 1}>
          <div
            className={cn(
              "grid h-full w-full overflow-hidden",
              styles.gap,
              styles.mediaRadius,
              photoLayout === 1 && "grid-cols-1 grid-rows-1",
              photoLayout === 2 && "grid-cols-2 grid-rows-1",
              photoLayout === 3 && "grid-cols-[1.35fr_1fr] grid-rows-2",
              photoLayout === 4 && "grid-cols-2 grid-rows-2",
            )}
          >
            {visiblePhotos.map((photo, index) => (
              <div
                key={`${photo}-${index}`}
                className={cn(
                  "relative min-h-0 overflow-hidden",
                  getLayoutPhotoClass(photoLayout, index),
                )}
              >
                <Image
                  src={photo}
                  alt={`${profileName} photo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
