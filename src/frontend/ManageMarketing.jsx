import React from "react";
import { Heading, Box, Stack, Image, TextArea, Inline } from "@forge/react";
import { FormGenerate } from "./FormGenerate";

const styles = {
  formField: {
    padding: "space.300",
    boxShadow: "elevation.shadow.raised",
    borderRadius: "border.radius",
  },
  contentArea: {
    padding: "space.300",
    boxShadow: "elevation.shadow.raised",
    borderRadius: "border.radius",
    height: "100%",
  },
};

const ManageMarketing = () => {
  return (
      <Box>
        <Inline space="space.150">
          <Stack>
            <Box xcss={styles.formField}>
              {/* <FormGenerate /> */}
            </Box>
          </Stack>
          <Stack grow="hug">
            <Box xcss={styles.contentArea}>
              <Heading as="h2" level="h600">
                Generated Content
              </Heading>
              {/* Add generated content here */}
              <TextArea placeholder="Generated content will appear here after you submit the form."></TextArea>
            </Box>
          </Stack>
        </Inline>
      </Box>
  );
};

export default ManageMarketing;
