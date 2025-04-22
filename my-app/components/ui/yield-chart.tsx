"use client";
import { useState } from "react";
import { Button } from "./button";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	TooltipProps,
} from "recharts";
import { cn } from "@/lib/utils";

const data = {
	"1W": [
		{ date: "Mon", value: 3.2 },
		{ date: "Tue", value: 3.5 },
		{ date: "Wed", value: 3.4 },
		{ date: "Thu", value: 3.8 },
		{ date: "Fri", value: 3.9 },
		{ date: "Sat", value: 4.2 },
		{ date: "Sun", value: 4.5 },
	],
	"1M": [
		{ date: "Week 1", value: 3.2 },
		{ date: "Week 2", value: 3.5 },
		{ date: "Week 3", value: 3.7 },
		{ date: "Week 4", value: 4.5 },
	],
	"3M": [
		{ date: "Jan", value: 3.0 },
		{ date: "Feb", value: 3.5 },
		{ date: "Mar", value: 4.5 },
	],
	"1Y": [
		{ date: "Q1", value: 3.0 },
		{ date: "Q2", value: 3.5 },
		{ date: "Q3", value: 4.0 },
		{ date: "Q4", value: 4.5 },
	],
	All: [
		{ date: "2020", value: 2.5 },
		{ date: "2021", value: 3.0 },
		{ date: "2022", value: 3.5 },
		{ date: "2023", value: 4.0 },
		{ date: "2024", value: 4.5 },
	],
};

type TimeRange = "1W" | "1M" | "3M" | "1Y" | "All";

// Custom tooltip
const CustomTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<number, string>) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-card p-2 border border-border rounded-md shadow-md">
				<p className="text-sm font-medium">{`${label}`}</p>
				<p className="text-secondary text-sm">{`APY: ${payload[0].value}%`}</p>
			</div>
		);
	}

	return null;
};

export function YieldChart() {
	const [timeRange, setTimeRange] = useState<TimeRange>("1M");

	return (
		<div className="p-6 rounded-lg bg-card border border-border">
			<div className="flex items-center justify-between mb-6">
				<h3 className="font-medium text-lg">Yield Performance</h3>
				<div className="flex gap-1">
					{(["1W", "1M", "3M", "1Y", "All"] as TimeRange[]).map((range) => (
						<Button
							key={range}
							variant={timeRange === range ? "secondary" : "ghost"}
							size="sm"
							onClick={() => setTimeRange(range)}
							className={cn(
								"text-xs px-2.5",
								timeRange === range ? "" : "text-muted-foreground"
							)}
						>
							{range}
						</Button>
					))}
				</div>
			</div>

			<div className="h-64 w-full">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data[timeRange]}
						margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
					>
						<CartesianGrid
							strokeDasharray="3 3"
							stroke="rgba(255,255,255,0.1)"
						/>
						<XAxis
							dataKey="date"
							tick={{ fill: "hsl(var(--muted-foreground))" }}
							axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
						/>
						<YAxis
							tickFormatter={(value) => `${value}%`}
							tick={{ fill: "hsl(var(--muted-foreground))" }}
							axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
							domain={[0, "dataMax + 0.5"]}
						/>
						<Tooltip content={<CustomTooltip />} />
						<Line
							type="monotone"
							dataKey="value"
							stroke="hsl(var(--primary))"
							strokeWidth={2}
							dot={{ r: 4, fill: "hsl(var(--primary))", strokeWidth: 0 }}
							activeDot={{ r: 6, fill: "hsl(var(--primary))", strokeWidth: 0 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
