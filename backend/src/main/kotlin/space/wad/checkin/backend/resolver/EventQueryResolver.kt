package space.wad.checkin.backend.resolver

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component
import space.wad.checkin.backend.model.Event
import space.wad.checkin.backend.service.EventService

@Component
class EventQueryResolver(
    private val eventService: EventService
) : GraphQLQueryResolver {
    fun events(): List<Event> = eventService.getAll()
}