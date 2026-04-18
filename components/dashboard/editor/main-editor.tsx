import { Card, CardFooter } from "@/components/ui/card";
import EditorToolbar from "./toolbar";
import EditorBody from "./editor-body";
import { Button } from "@/components/ui/button";
import DeleteButton from "../components/delete-button";

export default function MainEditor() {
  return (
    <Card>
      <EditorToolbar />
      <EditorBody />
      <CardFooter className="gap-1">
        <Button size={"sm"}>Save</Button>
        <DeleteButton size={"sm"} />
      </CardFooter>
    </Card>
  );
}
