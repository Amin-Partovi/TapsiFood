import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClientProvider } from "@/utils";
import { NestedLayout } from "@/components/layouts";

const euclid = localFont({
  src: [
    {
      path: "../../public/fonts/EuclidSquare-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/EuclidSquare-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/EuclidSquare-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/EuclidSquare-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclid.className}  antialiased`}>
        <QueryClientProvider>
          <NestedLayout>{children}</NestedLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
