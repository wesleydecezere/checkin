package space.wad.checkin.backend.resolver

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import space.wad.checkin.backend.model.Checkin
import space.wad.checkin.backend.model.input.CheckinInput
import space.wad.checkin.backend.service.CheckinService

@Component
class CheckinMutationResolver(
    private val checkinService: CheckinService
) : GraphQLMutationResolver {
    fun createCheckin(checkin: CheckinInput): Checkin = checkinService.create(checkin)
}