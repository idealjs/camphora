export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div style={{ marginLeft: "8px", marginRight: "8px" }}>{children}</div>
  );
}
