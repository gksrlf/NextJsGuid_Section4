import EventList from "../componets/events/event-list"
import { getFeaturedEvents } from "../dummy-data"

const HomePage = () => {
	const featuredEvents = getFeaturedEvents()

	return (
		<div>
			<header>
				<nav></nav>
			</header>
			<EventList items={featuredEvents} />
		</div>
	)
}

export default HomePage
