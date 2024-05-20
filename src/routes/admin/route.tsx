import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ApplicationSidebar } from "../../modules/core/components/ApplicationSidebar";
import { RequiredLoginWrapper } from "@/modules/core/components/RequiredLoginWrapper";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Route = createFileRoute("/admin")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <RequiredLoginWrapper>
      <ApplicationSidebar />
      <div className="flex ">
        <ScrollArea className="max-h-screen flex w-full">
          <Outlet />
        </ScrollArea>
      </div>
    </RequiredLoginWrapper>
  );
}
