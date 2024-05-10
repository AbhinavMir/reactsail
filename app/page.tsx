import Image from "next/image";
import { Header } from "@/components/header";
import { TableComponent } from "@/components/table";

export default function Home() {
  return (
    <div>
      <Header />
      <TableComponent />
    </div>
  );
}
