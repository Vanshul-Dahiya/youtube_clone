import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Sidebar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCat}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCat]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #e3e3e3",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mx: 1.5, color: "#fff" }}
        >
          Copyright 2023{" "}
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCat} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
