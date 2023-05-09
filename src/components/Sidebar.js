import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectCat = "New";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((cat) => (
      <button
        className="category-btn"
        style={{
          background: cat.name === selectCat && "#fc1503",
          color: "white",
        }}
        key={cat.name}
      >
        <span
          style={{
            color: cat.name === selectCat ? "white" : "red",
            marginRight: "12px",
          }}
        >
          {cat.icon}
        </span>
        <span style={{ opacity: cat.name === selectCat ? "1" : "0.8" }}>
          {cat.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
