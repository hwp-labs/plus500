import { redirect } from "next/navigation";
import { PATH_PROTECTED } from "@/constants/PATH";

export default function DashboardPage() {
  redirect(PATH_PROTECTED.trade);
}
