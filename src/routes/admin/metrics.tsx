import { MetricsPage } from "@/modules/metrics/MetricsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/metrics")({
  component: Metrics,
});

function Metrics() {
  return <MetricsPage />;
}
