import React, { useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchInput = ({ onSubmitSearchInput, term }) => {
  const [searchInput, setSearchInput] = useState(term);

  const onChangeSearchInput = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  const onEnterKeyEvent = useCallback(
    (e) => {
      if (e.key === "Enter") {
        toogleSearchButton();
        e.preventDefault();
      }
    },
    [searchInput]
  );

  const toogleSearchButton = useCallback(() => {
    onSubmitSearchInput(searchInput);
  }, [searchInput]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search ..."
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterKeyEvent}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={toogleSearchButton}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchInput;
