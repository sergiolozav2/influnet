import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { Check, ChevronsUpDown } from "lucide-react";
import { FormField } from "./form";
import { FieldValues, Control } from "react-hook-form";

const myEnum605 = [{ label: "label", value: "value" }];

type OptionType = { label: string; value: string };

type InputAutocompleteProps = {
  options: OptionType[];
  name: string;
  control: Control<FieldValues>;
};

export function InputAutocomplete(props: InputAutocompleteProps) {
  return (
    <FormField
      name={props.name}
      control={props.control}
      render={({ field }) => {
        return (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={cn(
                  "w-[200px] justify-between",
                  !field.value && "text-muted-foreground",
                )}
              >
                {field.value
                  ? myEnum605.find((item) => item.value === field.value)?.label
                  : "Select item"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search myEnum605..." />
                <CommandEmpty>Ningún resultado encontrado.</CommandEmpty>
                <CommandGroup>
                  {props.options.map((option) => (
                    <CommandItem
                      value={option.label}
                      key={option.value}
                      onSelect={() => {
                        form.setValue("key950", option.value);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          option.value === field.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        );
      }}
    ></FormField>
  );
}
