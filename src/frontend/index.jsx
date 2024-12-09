import React, { useEffect, useState } from "react";
import ForgeReconciler from "@forge/react";
import { invoke } from "@forge/bridge";
import Dashboard from "./Dashboard";
import ManageMarketing from "./ManageMarketing";
import {
  Heading,
  Box,
  Stack,
  Image,
  TextArea,
  Inline,
  Button,
  ButtonGroup,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Tooltip,
} from "@forge/react";

const App = () => {
  return (
    <>
      <Box>
        {/* <Image
        src={myCat}
        alt="black and white cat lying on brown bamboo chair inside room"
      /> */}
        <Heading as="h1" level="h700">
          PromoStream
        </Heading>
        <TabbedApp />
      </Box>
    </>
  );
};

const TabbedApp = () => {
  return (
    <Box xcss={{ marginTop: "space.150" }}>
      <Tabs id="default" defaultSelected={0}>
        <TabList>
          <Tooltip content="Dashboard">
            <Tab>
              <Heading as="h4" level="h100">
                Dashboard
              </Heading>
            </Tab>
          </Tooltip>
          <Tooltip content="Manage Marketing">
            <Tab>
              <Heading as="h4" level="h100">
                Manage Marketing
              </Heading>
            </Tab>
          </Tooltip>
        </TabList>
        <TabPanel>
          <Dashboard />
        </TabPanel>
        <TabPanel>
          <ManageMarketing />
        </TabPanel>
      </Tabs>
    </Box>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
