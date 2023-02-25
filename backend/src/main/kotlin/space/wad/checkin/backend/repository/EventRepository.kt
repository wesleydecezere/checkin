package space.wad.checkin.backend.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import space.wad.checkin.backend.model.Event

@Repository
interface EventRepository : JpaRepository<Event, Long> {}