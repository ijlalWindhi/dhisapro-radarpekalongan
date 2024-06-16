import "../globals.css";
import Coba from "./dashboard/coba";
import HeaderDashboard from "./dashboard/components/HeaderDashboard";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderDashboard />
        <Coba>{children}</Coba>
      </body>
    </html>
  );
}
