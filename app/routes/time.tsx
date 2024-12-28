import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/start";
import { getServerTime } from "~/utils/time";

export const Route = createFileRoute("/time")({
	component: Time,
});

function Time() {
	const getTime = useServerFn(getServerTime);
	const { data } = useQuery({
		queryKey: ["time"],
		queryFn: () => getTime(),
	});
	return (
		<div className="p-2">
			<h3>Time</h3>
			<p>{data}</p>
		</div>
	);
}
