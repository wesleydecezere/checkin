package space.wad.checkin.backend.resolver

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component
import space.wad.checkin.backend.model.Pupil
import space.wad.checkin.backend.service.PupilService

@Component
class PupilQueryResolver(
    private val pupilService: PupilService
) : GraphQLQueryResolver {
    fun pupils(): List<Pupil> = pupilService.getAll()
    fun pupil(id: Long) = pupilService.getById(id)
}