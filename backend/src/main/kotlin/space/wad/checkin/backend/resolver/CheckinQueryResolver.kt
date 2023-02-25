package space.wad.checkin.backend.resolver

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component
import space.wad.checkin.backend.model.Checkin
import space.wad.checkin.backend.service.CheckinService

@Component
class CheckinQueryResolver(
    private val checkinService: CheckinService
) : GraphQLQueryResolver {
    fun checkins(): List<Checkin> = checkinService.getAll()
}