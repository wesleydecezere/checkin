package space.wad.checkin.backend.resolver

import graphql.kickstart.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component
import space.wad.checkin.backend.model.input.PupilInput
import space.wad.checkin.backend.service.PupilService

@Component
class PupilMutationResolver(
    private val pupilService: PupilService
) : GraphQLMutationResolver {
    fun createPupil(pupil: PupilInput) = pupilService.create(pupil)
    fun deletePupilById(id: Long) = pupilService.delete(id)
    fun updatePupilById(id: Long, pupil: PupilInput) = pupilService.update(id, pupil)
}