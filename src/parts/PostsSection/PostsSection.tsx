import { Section, Container, Heading, Stack } from "../../components";
import { PostsGrid } from "../PostsGrid";

export const PostsSection = () => {
  return (
    <Section>
      <Container>
        <Stack>
          <Heading level={1}>Posts</Heading>
          <PostsGrid />
        </Stack>
      </Container>
    </Section>
  );
};
