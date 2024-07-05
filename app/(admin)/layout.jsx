import "../globals.css";
import HeaderDashboard from "./dashboard/_components/HeaderDashboard";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderDashboard />
        {children}
      </body>
    </html>
  );
}
