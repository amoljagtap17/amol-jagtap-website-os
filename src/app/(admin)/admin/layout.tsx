import { AdminTabs } from "@/components/sections";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto py-10">
      <AdminTabs />
      <div className="mt-12">{children}</div>
    </div>
  );
}
