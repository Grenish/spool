import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Field,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import Image from "next/image";

export default function Spoolhub() {
  return (
    <div className="min-h-dvh flex flex-col w-full items-center justify-center">
      <FieldSet>
        <FieldGroup>
          <Field>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1773578978637-c9771e7a9913?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                width={100}
                height={300}
                alt="photo"
              />
            </AspectRatio>
            <h2>Hello</h2>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
