import { Container, Heading, Section, Stack } from "../../components";
import { AuthorsGrid } from "../AuthorsGrid";

export const AuthorsSection = () => {
  return (
    <Section>
      <Container>
        <Stack>
          <Heading level={1}>Authors</Heading>
          <AuthorsGrid />
        </Stack>
      </Container>
    </Section>
  );
};
