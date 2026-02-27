import {
  BlockLink,
  Body,
  Footer,
  Header,
  Logo,
  Menu,
  Page,
  Paragraph,
  Stack,
} from "@/components";
import { navigation } from "@/data";
import type { PropsWithChildren } from "react";

type BasePageProps = {
  currentPath: string;
};

export const BasePage = ({
  children,
  currentPath,
}: PropsWithChildren<BasePageProps>) => {
  return (
    <Body>
      <Page
        header={
          <Header>
            <Stack horizontal align="center" justify="space-between">
              <BlockLink href="/">
                <Logo />
              </BlockLink>

              <Menu>
                {navigation.main.map((item) => (
                  <Menu.Item
                    href={item.href}
                    active={item.href === currentPath}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
            </Stack>
          </Header>
        }
        footer={
          <Footer>
            <Stack horizontal justify="space-between" align="center">
              <Paragraph>&copy; {new Date().getFullYear()} My Blog</Paragraph>
              <BlockLink href="/">
                <Logo />
              </BlockLink>
            </Stack>
          </Footer>
        }
      >
        {children}
      </Page>
    </Body>
  );
};
