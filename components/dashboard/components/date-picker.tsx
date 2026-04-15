import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DatePicker() {
  return (
    <Select defaultValue="infinite">
      <SelectTrigger>
        <SelectValue placeholder="Select a duration" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="infinite">Infinite</SelectItem>
          <SelectItem value="5days">5 days</SelectItem>
          <SelectItem value="10days">10 days</SelectItem>
          <SelectItem value="15days">15 days</SelectItem>
          <SelectItem value="30days">30 days</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
