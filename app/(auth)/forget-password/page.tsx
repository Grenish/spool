import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { KeyholeIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ForgetPassword() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      <FieldSet className="max-w-sm w-full">
        <h2 className="text-xl font-bold">Spool.</h2>
        <FieldGroup>
          <Field>
            <FieldLabel>Enter OTP</FieldLabel>
            <FieldDescription>
              We&apos;ve sent you a 6-digits OTP (One Time Password) to your
              registered email address.
            </FieldDescription>
            <InputGroup>
              <InputGroupAddon>
                <KeyholeIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="OTP" required maxLength={6} />
            </InputGroup>
          </Field>
        </FieldGroup>
        <FieldSet>
          <Field orientation={"horizontal"}>
            <Link href={"/reset-password/123"}>
              <Button>Verify</Button>
            </Link>
            <Link href={"/signin"}>
              <Button variant={"outline"}>Remember Password?</Button>
            </Link>
          </Field>
        </FieldSet>
      </FieldSet>
    </div>
  );
}
