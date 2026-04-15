import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EyeIcon } from "@phosphor-icons/react/dist/ssr";
import DeleteButton from "./delete-button";

export default function LinkCard({
  name,
  link,
}: {
  name?: string;
  link: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{link}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-1">
        <Button>
          <EyeIcon /> View
        </Button>
        <DeleteButton />
      </CardFooter>
    </Card>
  );
}
