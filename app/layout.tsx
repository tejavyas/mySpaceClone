// "use client";

import AuthProvider from "./AuthProvider";
import NavMenu from "./NavMenu";
import './globals.css';

export const metadata = {
  title : "mySpace clone",
  description : "learning nextJS",
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}