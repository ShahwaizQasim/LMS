import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
      <Tabs defaultValue="Dashboard"  className="w-full">
        <TabsList className="w-full">
          <Link href={"/admin/dashboard"}>
            <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
          </Link>
          <Link href={"/admin/courses"}>
            <TabsTrigger value="Courses">Courses</TabsTrigger>
          </Link>
          <Link href={"/admin/batches"}>
            <TabsTrigger value="Batches">Batches</TabsTrigger>
          </Link>
          <Link href={"/admin/trainers"}>
            <TabsTrigger value="Trainers">Trainers</TabsTrigger>
          </Link>
          <Link href={"/admin/students"}>
            <TabsTrigger value="Students">Students</TabsTrigger>
          </Link>
        </TabsList>
        {/* <TabsContent value="Admin">{children}</TabsContent> */}
        <TabsContent value="Dashboard">{children}</TabsContent>
        <TabsContent value="Courses">{children}</TabsContent>
        <TabsContent value="Batches">{children}</TabsContent>
        <TabsContent value="Trainers">{children}</TabsContent>
        <TabsContent value="Students">{children}</TabsContent>
      </Tabs>
  );
}
