import { BarChart3, Brain, FileText, LineChart } from "lucide-react";
import Features from "~/app/(marketing)/_components/features-horizontal";
import { Section } from "~/app/(marketing)/_components/section";

const data = [
  {
    id: 1,
    title: "AI-Powered Dashboard",
    content: "Visualize trends and gain insights at a glance.",
    image: "/dashboard.png",
    icon: <BarChart3 className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: "Natural Language Processing",
    content: "Analyze text and extract sentiment effortlessly.",
    image: "/dashboard.png",
    icon: <Brain className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: "Predictive Analytics",
    content: "Forecast trends and make data-driven decisions.",
    image: "/dashboard.png",
    icon: <LineChart className="size-6 text-primary" />,
  },
  {
    id: 4,
    title: "Automated Reporting",
    content: "Generate comprehensive reports with one click.",
    image: "/dashboard.png",
    icon: <FileText className="size-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="User Flows and Navigational Structures">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
