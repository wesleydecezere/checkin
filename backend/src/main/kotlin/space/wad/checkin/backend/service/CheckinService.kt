package space.wad.checkin.backend.service

import org.springframework.stereotype.Service
import space.wad.checkin.backend.model.Checkin
import space.wad.checkin.backend.model.input.CheckinInput
import space.wad.checkin.backend.repository.CheckinRepository

@Service
class CheckinService(
    private val checkinRepository: CheckinRepository
) {
    fun getAll(): List<Checkin> = checkinRepository.findAll()
    fun create(checkin: CheckinInput): Checkin = checkinRepository.save(checkin.toEntity())
}
