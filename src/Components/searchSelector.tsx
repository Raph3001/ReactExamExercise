import {Input} from "@chakra-ui/react";

interface SearchSelectorProps {
    onChange: (search: string) => void
}

const SearchSelector = ({onChange}: SearchSelectorProps) => {

    const handleEvent = (event) => {
        onChange(event.target.value)
    }

    return (
        <div>
            <Input htmlSize={4} width='auto' onChange={handleEvent} />
            </div>
    );
};

export default SearchSelector;