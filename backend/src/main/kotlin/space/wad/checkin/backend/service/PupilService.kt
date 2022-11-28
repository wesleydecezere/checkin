package space.wad.checkin.backend.service

import org.springframework.stereotype.Service
import space.wad.checkin.backend.model.Pupil
import space.wad.checkin.backend.model.input.PupilInput
import space.wad.checkin.backend.repository.PupilRepository

@Service
class PupilService(
    private val pupilRepository: PupilRepository
) {
    fun getAll(): List<Pupil> = pupilRepository.findAll()

    fun getById(id: Long) = pupilRepository.findById(id)

    fun create(pupil: Pupil): Pupil = pupilRepository.save(pupil)
    fun create(pupil: PupilInput): Pupil = pupilRepository.save(pupil.toEntity())

    fun delete(id: Long): Boolean {
        val exists = pupilRepository.existsById(id)
        if (exists) pupilRepository.deleteById(id)
        return exists
    }

    fun update(id: Long, pupil: PupilInput): Pupil? {
        val optionalPersistedPupil = getById(id)

        if (optionalPersistedPupil.isPresent) {
            val pupilUpdated = pupil.toEntity(id)
            return create(pupilUpdated)
        }

        return null
    }
}