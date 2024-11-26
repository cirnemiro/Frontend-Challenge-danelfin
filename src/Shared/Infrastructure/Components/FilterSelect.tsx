import {Select, SelectItem} from "@nextui-org/select";

interface FilterInterface {
    name: string;
    options: ({ value: string; text: string })[];
    placeholder: string
}

interface FilterProps {
    filter: FilterInterface,
    onChange: any,
}

const FilterSelect = ({filter, onChange}: FilterProps) =>
    <Select
        label={filter.placeholder}
        className="max-w-xs"
        onChange={e => onChange(filter.name, e.target.value)}
    >
        {filter.options.map(option =>
            <SelectItem key={option.value} value={option.value}>{option.text}</SelectItem>
        )}
    </Select>

export default FilterSelect