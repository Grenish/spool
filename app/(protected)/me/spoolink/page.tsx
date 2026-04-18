"use client";

import { useState } from "react";
import DatePicker from "@/components/dashboard/components/date-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import {
  ArrowDownIcon,
  AxeIcon,
  MagnifyingGlassIcon,
  NutIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Shorten() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col w-full items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center w-full">
        <FieldSet className="w-full max-w-2xl">
          <FieldGroup>
            <Field>
              <div className="self-start mb-2">
                <h2 className="text-4xl font-bold">Spoolink.</h2>
                <p className="text-sm font-medium">
                  Streamlined link management with privacy-first controls.
                </p>
              </div>
              <InputGroup>
                <InputGroupAddon>
                  <MagnifyingGlassIcon />
                </InputGroupAddon>
                <InputGroupInput
                  placeholder="Enter your URL"
                  className="w-full"
                />
              </InputGroup>
              <Field orientation={"horizontal"}>
                <Button>
                  <AxeIcon />
                  SpoolIt
                </Button>
              </Field>
            </Field>
            <Field>
              <Card className="gap-0 py-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 py-6">
                  <div className="space-y-1.5">
                    <CardTitle className="inline-flex items-center gap-2">
                      <NutIcon /> Settings
                    </CardTitle>
                    <CardDescription>
                      Configure advanced settings and security preferences.
                    </CardDescription>
                  </div>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  >
                    <ArrowDownIcon
                      className={`transition-transform duration-200 ${isSettingsOpen ? "rotate-180" : ""}`}
                    />
                  </Button>
                </CardHeader>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isSettingsOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <CardContent className="pb-6">
                      <Item>
                        <ItemContent>
                          <ItemTitle>Name</ItemTitle>
                          <ItemDescription>
                            Set a clear, recognizable title for this shared
                            link.
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                          <Input placeholder="spooolink" size={6} />
                        </ItemActions>
                      </Item>
                      <Item>
                        <ItemContent>
                          <ItemTitle>Expiration</ItemTitle>
                          <ItemDescription>
                            Specify how long the link should remain active.
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                          <DatePicker />
                        </ItemActions>
                      </Item>
                      <Item>
                        <ItemContent>
                          <ItemTitle>Access Limit</ItemTitle>
                          <ItemDescription>
                            Restrict the maximum number of times this link can
                            be visited.
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                          <Input
                            type="number"
                            placeholder="10"
                            min={1}
                            size={6}
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </ItemActions>
                      </Item>
                      <Item>
                        <ItemContent>
                          <ItemTitle>Password Protection</ItemTitle>
                          <ItemDescription>
                            Require a password to access the destination URL.
                          </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                          <Input type="text" placeholder="Password" size={6} />
                        </ItemActions>
                      </Item>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Field>
          </FieldGroup>
          <FieldSeparator />
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel>Your Recent Link</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/*Empty State*/}
                  <Card>
                    <CardHeader>
                      <CardTitle>No Links Yet</CardTitle>
                      <CardDescription>
                        You have not shortened any links yet. Your shortened
                        links will appear here.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </Field>
            </FieldSet>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  );
}
