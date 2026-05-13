import { Section, Container, Heading, Stack, Paragraph } from "@/ui";
import { PostsGrid } from "../PostsGrid";

type PostsSectionProps = {
  title: string;
  description?: string;
};

export const PostsSection = ({ title, description }: PostsSectionProps) => {
  return (
    <Section>
      <Container>
        <Stack>
          <Heading level={1}>{title}</Heading>
          {description && <Paragraph>{description}</Paragraph>}
          <PostsGrid />
        </Stack>
      </Container>
    </Section>
  );
};
