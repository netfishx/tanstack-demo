import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/time")({
	component: Time,
});

function Time() {
	return (
		<div className="p-2">
			<h3>Time</h3>
		</div>
	);
}
