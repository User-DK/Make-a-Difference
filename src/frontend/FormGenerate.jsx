import React from "react";
import {
  Form,
  FormHeader,
  FormFooter,
  FormSection,
  Button,
  ButtonGroup,
  Text,
  TextArea,
  Label,
  Select,
  Textfield,
  Stack,
  Box,
  DatePicker,
  Checkbox,
  Toggle,
  RadioGroup,
  RequiredAsterisk,
  useForm,
  Inline,
  LoadingButton,
} from "@forge/react";
import AtlassianIntelligenceIcon from "@atlaskit/icon/core/atlassian-intelligence";

const styles = {
  box: {
    width: "50%",
    padding: "space.050",
  },
};

export const FormGenerate = () => {
  const { getFieldId, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add logic to process the form data, fetch projects, and generate content
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Inline space="space.200">
        <Stack grow="fill">
          <FormHeader title="Get Marketing Summary with AI"></FormHeader>
        </Stack>
        <Stack>
          <ButtonGroup>
            <Button
              type="submit"
              appearance="primary"
              iconAfter="premium"
            >
              GO
            </Button>
            <LoadingButton appearance="primary" isLoading>
              Loading button
            </LoadingButton>
          </ButtonGroup>
        </Stack>
      </Inline>
      <FormSection>
        <Stack space="space.200">
          {/* Platform Selection */}
          <Inline spread="space-between" space="space.200">
            <Box>
              <Label labelFor={getFieldId("platform")}>
                Select Platform <RequiredAsterisk />
              </Label>
              <Select
                options={[
                  { label: "LinkedIn", value: "linkedin" },
                  { label: "Instagram", value: "instagram" },
                  { label: "Discord", value: "discord" },
                  { label: "Internal Team Update", value: "team_update" },
                  { label: "User Feature Alert", value: "feature_alert" },
                ]}
                {...register("platform", { required: true })}
              />
            </Box>

            {/* Project Source */}
            <Box>
              <Label labelFor={getFieldId("projectSource")}>
                Select Project Source <RequiredAsterisk />
              </Label>
              <Select
                options={[
                  { label: "Jira", value: "jira" },
                  { label: "Confluence", value: "confluence" },
                  { label: "Bitbucket", value: "bitbucket" },
                ]}
                {...register("projectSource", { required: true })}
              />
            </Box>

            {/* Project Name */}
            <Box>
              <Label labelFor={getFieldId("projectName")}>
                Select Project Name <RequiredAsterisk />
              </Label>
              <Select
                options={[
                  { label: "Project Alpha", value: "alpha" },
                  { label: "Project Beta", value: "beta" },
                  { label: "Project Gamma", value: "gamma" },
                ]}
                {...register("projectName", { required: true })}
              />
            </Box>
          </Inline>
          {/* Objective */}
          <Box>
            <Label labelFor={getFieldId("objective")}>
              Objective of the Project <RequiredAsterisk />
            </Label>
            <Textfield
              resize="auto"
              maxHeight="2em"
              placeholder="What is the main goal of the project?"
              {...register("objective", { required: true })}
            />
          </Box>
          <Inline spread="space-between" space="space.200">
            {/* Target Audience */}
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("targetAudience")}>
                Target Audience <RequiredAsterisk />
              </Label>
              <Select
                options={[
                  { label: "Users", value: "users" },
                  { label: "Team Members", value: "team" },
                  { label: "Clients", value: "clients" },
                  { label: "Executives", value: "executives" },
                ]}
                {...register("targetAudience", { required: true })}
              />
            </Box>

            {/* Type of Post */}
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("postType")}>
                Type of Post <RequiredAsterisk />
              </Label>
              <Select
                options={[
                  { label: "Marketing Blog", value: "blog" },
                  { label: "Team Summary", value: "summary" },
                  { label: "Team Achievement Message", value: "achievement" },
                  { label: "User Feature Alert", value: "feature_alert" },
                ]}
                {...register("postType", { required: true })}
              />
            </Box>
          </Inline>
          {/* Challenges Faced */}
          <Inline spread="space-between" space="space.200">
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("challenges")}>
                Challenges Faced
              </Label>
              <TextArea
                resize="auto"
                maxHeight="2em"
                placeholder="Describe any technical, operational, or other challenges faced."
                {...register("challenges")}
              />
            </Box>

            {/* Learning Outcomes */}
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("learnings")}>
                Learning Outcomes
              </Label>
              <TextArea
                resize="auto"
                maxHeight="2em"
                placeholder="Key takeaways or lessons learned during the project."
                {...register("learnings")}
              />
            </Box>
          </Inline>
          {/* Unique Features */}
          <Inline spread="space-between" space="space.200">
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("uniqueFeatures")}>
                Unique Features
              </Label>
              <TextArea
                resize="auto"
                maxHeight="2em"
                placeholder="Describe any unique features or innovations of the project."
                {...register("uniqueFeatures")}
              />
            </Box>

            {/* Achievements */}
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("achievements")}>Achievements</Label>
              <TextArea
                resize="auto"
                maxHeight="2em"
                placeholder="Highlight major achievements during the project."
                {...register("achievements")}
              />
            </Box>
          </Inline>
          {/* Team Contributions */}
          <Inline spread="space-between" space="space.200">
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("teamContributions")}>
                Team Contributions
              </Label>
              <TextArea
                resize="auto"
                maxHeight="2em"
                placeholder="Describe the team's contributions and collaboration efforts."
                {...register("teamContributions")}
              />
            </Box>

            {/* Any Other Notes */}
            <Box xcss={styles.box}>
              <Label labelFor={getFieldId("additionalNotes")}>
                Additional Notes
              </Label>
              <TextArea
                resize="auto"
                maxHeight="2em"
                placeholder="Any other information you'd like to include."
                {...register("additionalNotes")}
              />
            </Box>
          </Inline>
        </Stack>
      </FormSection>

      {/* <FormFooter>
        <ButtonGroup>
          <Button type="submit" appearance="primary">
            Generate
          </Button>
        </ButtonGroup>
      </FormFooter> */}
    </Form>
  );
};
