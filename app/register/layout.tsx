import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register",
  description: "Register to our application",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative ">
        {children}

      </body>
    </html>
  );
}
