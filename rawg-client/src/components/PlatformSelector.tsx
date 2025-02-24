import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedPlatform: Platform | null;
    onSelectedPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {

    const { data: parent_platform, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList>

                <MenuItem
                    hidden={!selectedPlatform}
                    color="red" onClick={() => onSelectedPlatform(null)}
                >
                    Clear
                </MenuItem>
                {parent_platform?.map((platform) => (
                    <MenuItem key={platform.id}
                        onClick={() => onSelectedPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
};

export default PlatformSelector;