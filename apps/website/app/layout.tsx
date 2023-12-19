import { lightTheme } from "@idealjs/camphora-styled";
import type { Metadata } from "next";

import Drawer from "@/components/Drawer";
import LabelButton from "@/components/LabelButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lightTheme}>
        <Drawer drawerId="rootDrawer" sideDrawer={<div>hello</div>}>
          <LabelButton htmlFor="rootDrawer">hello</LabelButton>
        </Drawer>
      </body>
    </html>
  );
}
