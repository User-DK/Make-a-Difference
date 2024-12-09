import React from "react";
import {
  Heading,
  Box,
  Stack,
  Image,
  TextArea,
  Inline,
  ButtonGroup,
  Button,
} from "@forge/react";
import { FormGenerate } from "./FormGenerate";
import UserEngagement from "./UserEngagement.png";

const styles = {
  formField: {
    padding: "space.300",
    boxShadow: "elevation.shadow.raised",
    borderRadius: "border.radius",
    width: "70%",
    marginTop: "space.200",
  },
  contentArea: {
    padding: "space.300",
    boxShadow: "elevation.shadow.raised",
    borderRadius: "border.radius",
    marginTop: "space.200",
    width: "30%",
    height: "100%",
    // maxHeight: "50%",
  },
};

const Dashboard = () => {
  return (
    <Box xcss={{ width: "100%", height: "100%" }}>
      <Inline space="space.150" alignBlock="stretch">
        <Box xcss={styles.formField}>
          <FormGenerate />
        </Box>

        <Box xcss={styles.contentArea}>
          <Heading as="h2" level="h600">
            Generated Content
          </Heading>
          <Box xcss={{ marginTop: "space.300", marginBottom: "space.300" }}>
            <TextArea
              placeholder="Generated content will appear here after you submit the form."
              maxHeight="0.5em"
              minimumRows={12}
              resize="auto"
            ></TextArea>
          </Box>
          <ButtonGroup>
            <Button appearance="primary" iconAfter="premium">
              Save
            </Button>
            <Button appearance="subtle">Cancel</Button>
          </ButtonGroup>
          <Image src={UserEngagement} alt="User Engagement" />
        </Box>
      </Inline>
    </Box>
  );
};

export default Dashboard;
