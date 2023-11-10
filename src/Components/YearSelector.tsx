import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface YearSelectorProperties {
    selectedYear: number;
    onYearSelect: (year: number) => void;
}

const YearSelector = ({selectedYear, onYearSelect}: YearSelectorProperties) => {

    const yearRange: number[] = [...Array(33).keys()].map(n => 2023 - n);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedYear}</MenuButton>
            <MenuList>
                {yearRange.map(y => <MenuItem onClick={() => onYearSelect(y)} key={y}>{y}</MenuItem> )}
            </MenuList>
        </Menu>
    );
};

export default YearSelector;