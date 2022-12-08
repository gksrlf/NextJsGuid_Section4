import EventList from "../../componets/events/event-list"
import { getAllEvents } from "../../dummy-data"
import EventsSearch from "../../componets/events/events-search"
import { useRouter } from "next/router"
const AllEventsPage = () => {
	const router = useRouter()
	const events = getAllEvents()

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`
		router.push(fullPath)
	}

	return (
		<div>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	)
}

export default AllEventsPage
