import { FC, useRef, useState } from "react";

import { Button, ClickAwayListener, MenuItem, MenuList } from "@mui/material";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./DropdownMenu.module.scss";

type dropdownMenuProps = {
    options: string[];
};

const DropdownMenu: FC<dropdownMenuProps> = ({ options }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [displayedOptions, setDisplayedOptions] = useState(
        options.slice(1, options.length)
    );
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleMenuItemClick = (option: string) => {
        setSelectedOption(option);
        setDisplayedOptions(options.filter((item) => item != option));
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="menu">
            <div ref={anchorRef}>
                <span>{selectedOption}</span>
                <Button
                    onClick={handleToggle}
                    className={`${
                        open
                            ? styles["menu__button_open"]
                            : styles["menu__button"]
                    }`}
                >
                    <ArrowDropDownIcon />
                </Button>
            </div>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                transition
                disablePortal
                className={styles["menu_open__wrapper"]}
            >
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    id="split-button-menu"
                                    autoFocusItem
                                    className={styles["menu_open"]}
                                >
                                    {displayedOptions.map((option) => (
                                        <MenuItem
                                            key={option}
                                            onClick={() =>
                                                handleMenuItemClick(option)
                                            }
                                            className={
                                                styles["menu_open__item"]
                                            }
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default DropdownMenu;
