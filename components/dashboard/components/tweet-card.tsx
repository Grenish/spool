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
import { XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type TweetCardSize = "sm" | "md" | "lg" | "xl";

type TweetCardProps = {
  avatarSrc?: string;
  className?: string;
  bio?: string;
  profileName: string;
  tweet?: string;
  timestamp?: string;
  media?: string[];
  likes?: number;
  retweets?: number;
  replies?: number;
  size?: TweetCardSize;
};

const DEFAULT_AVATAR = "https://github.com/shadcn.png";

const sizeStyles: Record<
  TweetCardSize,
  {
    avatar: string;
    button: "icon-xs" | "icon-sm" | "icon" | "icon-lg";
    card: string;
    cardSize: "default" | "sm";
    description: string;
    gap: string;
    inset: string;
    itemSize: "default" | "sm";
    mediaRadius: string;
    title: string;
    tweet: string;
    metadata: string;
  }
> = {
  sm: {
    avatar: "size-9",
    button: "icon-xs",
    card: "sm:max-w-xs",
    cardSize: "sm",
    description: "text-xs",
    gap: "gap-1.5",
    inset: "px-4",
    itemSize: "sm",
    mediaRadius: "rounded-xl",
    title: "text-sm",
    tweet: "text-xs",
    metadata: "text-xs",
  },
  md: {
    avatar: "size-10",
    button: "icon-sm",
    card: "sm:max-w-sm",
    cardSize: "default",
    description: "text-sm",
    gap: "gap-2",
    inset: "px-5",
    itemSize: "default",
    mediaRadius: "rounded-2xl",
    title: "text-sm",
    tweet: "text-sm",
    metadata: "text-xs",
  },
  lg: {
    avatar: "size-12",
    button: "icon",
    card: "sm:max-w-md",
    cardSize: "default",
    description: "text-sm",
    gap: "gap-2.5",
    inset: "px-6",
    itemSize: "default",
    mediaRadius: "rounded-2xl",
    title: "text-base",
    tweet: "text-base",
    metadata: "text-sm",
  },
  xl: {
    avatar: "size-14",
    button: "icon-lg",
    card: "sm:max-w-xl",
    cardSize: "default",
    description: "text-sm",
    gap: "gap-3",
    inset: "px-6",
    itemSize: "default",
    mediaRadius: "rounded-2xl",
    title: "text-base",
    tweet: "text-lg",
    metadata: "text-sm",
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

function formatCount(count: number | undefined): string {
  if (!count) return "0";
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return count.toString();
}

export default function TweetCard({
  avatarSrc = DEFAULT_AVATAR,
  className,
  bio,
  profileName,
  tweet,
  timestamp,
  media = [],
  likes,
  retweets,
  replies,
  size = "md",
}: TweetCardProps) {
  const styles = sizeStyles[size];
  const initials = getInitials(profileName);

  const hasEngagementStats =
    likes !== undefined || retweets !== undefined || replies !== undefined;

  return (
    <Card
      size={styles.cardSize}
      className={cn(
        "w-full border border-border/60 bg-card/95 shadow-sm",
        styles.card,
        className,
      )}
    >
      <Item
        size={styles.itemSize}
        className={cn(
          "border-0 rounded-none bg-transparent py-0",
          styles.inset,
        )}
      >
        <ItemMedia>
          <Avatar className={styles.avatar}>
            <AvatarImage src={avatarSrc} alt={profileName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className={styles.title}>{profileName}</ItemTitle>
          {bio && (
            <ItemDescription
              className={cn(styles.description, "text-muted-foreground")}
            >
              {bio}
            </ItemDescription>
          )}
        </ItemContent>
        <ItemActions>
          <Button
            variant={"outline"}
            size={styles.button}
            aria-label="Open tweet"
          >
            <XLogoIcon weight="duotone" />
          </Button>
        </ItemActions>
      </Item>
      <CardContent className={cn("pt-0", styles.inset)}>
        <div className={cn(styles.gap, "flex flex-col")}>
          <p className={cn(styles.tweet)}>{tweet}</p>

          {/* Media */}
          {media.length > 0 && (
            <AspectRatio ratio={16 / 9} className="mt-2">
              <div
                className={cn(
                  "grid h-full w-full overflow-hidden",
                  styles.gap,
                  styles.mediaRadius,
                  media.length === 1 && "grid-cols-1",
                  media.length === 2 && "grid-cols-2",
                  media.length === 3 && "grid-cols-[1fr_1fr] grid-rows-2",
                  media.length === 4 && "grid-cols-2 grid-rows-2",
                )}
              >
                {media.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className={cn(
                      "relative min-h-0 overflow-hidden",
                      media.length === 3 && index === 0 && "row-span-2",
                    )}
                  >
                    <Image
                      src={image}
                      alt={`Tweet media ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </AspectRatio>
          )}

          {/* Metadata & Engagement Stats */}
          {(timestamp || hasEngagementStats) && (
            <div
              className={cn(
                styles.metadata,
                "flex items-center justify-between text-muted-foreground border-t border-border/40 pt-2",
              )}
            >
              {timestamp && <span>{timestamp}</span>}
              {hasEngagementStats && (
                <div className="flex gap-4">
                  {replies !== undefined && (
                    <span>{formatCount(replies)} replies</span>
                  )}
                  {retweets !== undefined && (
                    <span>{formatCount(retweets)} retweets</span>
                  )}
                  {likes !== undefined && (
                    <span>{formatCount(likes)} likes</span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
