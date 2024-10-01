import LayoutDrawer from "@/features/LayoutDrawer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutDrawer>{children}</LayoutDrawer>;
}
