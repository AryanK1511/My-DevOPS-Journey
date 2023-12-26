import React from "react";

export const metadata = {
  title: 'My Full Stack Webpage',
  description: 'Created by Aryan Khurana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
