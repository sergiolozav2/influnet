import { EventsPage } from "@/modules/events/EventsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/events")({
  component: Events,
});

function Events() {
  return <EventsPage />;
}
