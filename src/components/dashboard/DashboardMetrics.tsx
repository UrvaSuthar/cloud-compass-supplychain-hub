
import { 
  ArrowDownIcon, 
  ArrowUpIcon, 
  ClockIcon, 
  DollarSignIcon,
  PackageIcon, 
  TruckIcon, 
  AlertTriangleIcon
} from "lucide-react";

const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Total Inventory",
      value: "24,892",
      change: "+3.2%",
      trend: "up",
      icon: <PackageIcon className="h-4 w-4 text-blue-500" />,
    },
    {
      title: "Pending Orders",
      value: "186",
      change: "+12.5%",
      trend: "up",
      icon: <ClockIcon className="h-4 w-4 text-amber-500" />,
    },
    {
      title: "In Transit",
      value: "42",
      change: "-5.1%",
      trend: "down",
      icon: <TruckIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Total Value",
      value: "$2.4M",
      change: "+2.3%",
      trend: "up",
      icon: <DollarSignIcon className="h-4 w-4 text-violet-500" />,
    },
    {
      title: "Stock Alerts",
      value: "18",
      change: "+5",
      trend: "up",
      icon: <AlertTriangleIcon className="h-4 w-4 text-red-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {metrics.map((metric, i) => (
        <div key={i} className="stat-card">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </span>
            {metric.icon}
          </div>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-semibold">{metric.value}</span>
            <span
              className={`ml-2 text-xs font-medium ${
                metric.trend === "up"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {metric.change}
              {metric.trend === "up" ? (
                <ArrowUpIcon className="ml-0.5 inline h-3 w-3" />
              ) : (
                <ArrowDownIcon className="ml-0.5 inline h-3 w-3" />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;
