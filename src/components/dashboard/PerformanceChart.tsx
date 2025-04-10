
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const weeklyData = [
  { name: 'Mon', inventory: 832, orders: 31, shipments: 12 },
  { name: 'Tue', inventory: 806, orders: 29, shipments: 18 },
  { name: 'Wed', inventory: 854, orders: 42, shipments: 16 },
  { name: 'Thu', inventory: 829, orders: 37, shipments: 22 },
  { name: 'Fri', inventory: 802, orders: 45, shipments: 27 },
  { name: 'Sat', inventory: 786, orders: 24, shipments: 15 },
  { name: 'Sun', inventory: 778, orders: 18, shipments: 10 },
];

const monthlyData = [
  { name: 'Week 1', inventory: 812, orders: 185, shipments: 92 },
  { name: 'Week 2', inventory: 825, orders: 192, shipments: 105 },
  { name: 'Week 3', inventory: 839, orders: 201, shipments: 118 },
  { name: 'Week 4', inventory: 802, orders: 174, shipments: 96 },
];

const yearlyData = [
  { name: 'Jan', inventory: 780, orders: 650, shipments: 420 },
  { name: 'Feb', inventory: 795, orders: 680, shipments: 450 },
  { name: 'Mar', inventory: 815, orders: 710, shipments: 470 },
  { name: 'Apr', inventory: 830, orders: 740, shipments: 490 },
  { name: 'May', inventory: 860, orders: 780, shipments: 520 },
  { name: 'Jun', inventory: 880, orders: 820, shipments: 550 },
  { name: 'Jul', inventory: 905, orders: 850, shipments: 580 },
  { name: 'Aug', inventory: 890, orders: 830, shipments: 560 },
  { name: 'Sep', inventory: 870, orders: 810, shipments: 530 },
  { name: 'Oct', inventory: 850, orders: 790, shipments: 510 },
  { name: 'Nov', inventory: 830, orders: 760, shipments: 480 },
  { name: 'Dec', inventory: 810, orders: 730, shipments: 460 },
];

const PerformanceChart = () => {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Performance Trends</CardTitle>
        <CardDescription>Monitor key metrics over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="week">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-primary"></span>
                <span>Inventory</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-[#22c55e]"></span>
                <span>Orders</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]"></span>
                <span>Shipments</span>
              </div>
            </div>
          </div>
          <TabsContent value="week" className="mt-2">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                      border: "none"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="inventory"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "hsl(var(--primary))",
                      r: 6
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{
                      stroke: "#22c55e",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "#22c55e",
                      strokeWidth: 2,
                      fill: "#22c55e",
                      r: 6
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="shipments"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      fill: "#f59e0b",
                      r: 6
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="month" className="mt-2">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                      border: "none"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="inventory"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "hsl(var(--primary))",
                      r: 6
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{
                      stroke: "#22c55e",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "#22c55e",
                      strokeWidth: 2,
                      fill: "#22c55e",
                      r: 6
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="shipments"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      fill: "#f59e0b",
                      r: 6
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="year" className="mt-2">
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlyData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                      border: "none"
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="inventory"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2,
                      fill: "hsl(var(--primary))",
                      r: 6
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{
                      stroke: "#22c55e",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "#22c55e",
                      strokeWidth: 2,
                      fill: "#22c55e",
                      r: 6
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="shipments"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      fill: "white",
                      r: 4
                    }}
                    activeDot={{
                      stroke: "#f59e0b",
                      strokeWidth: 2,
                      fill: "#f59e0b",
                      r: 6
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
