package space.wad.checkin.backend.service

import org.springframework.stereotype.Service
import space.wad.checkin.backend.model.Event
import space.wad.checkin.backend.repository.EventRepository

@Service
class EventService(
    private val eventRepository: EventRepository
) {
    fun getAll(): List<Event> = eventRepository.findAll()
}