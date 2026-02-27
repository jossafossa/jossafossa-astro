import {
  Container,
  Heading,
  Section,
  Stack,
  Paragraph,
} from "@/components";
import { AuthorsGrid } from "../AuthorsGrid";

type AuthorsSectionProps = {
  title: string;
  description?: string;
};

export const AuthorsSection = ({ title, description }: AuthorsSectionProps) => {
  return (
    <Section>
      <Container>
        <Stack>
          <Heading level={1}>{title}</Heading>
          {description && <Paragraph>{description}</Paragraph>}
          <AuthorsGrid />
        </Stack>
      </Container>
    </Section>
  );
};
