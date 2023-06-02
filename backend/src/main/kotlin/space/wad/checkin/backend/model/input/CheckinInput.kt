package space.wad.checkin.backend.model.input

import space.wad.checkin.backend.model.Checkin
import java.util.Date

data class CheckinInput(
    val eventId: Long,
    val participantId: Long,
    val date: Date
) {
    fun toEntity(): Checkin {
        return Checkin(null, eventId, participantId, date)
    }
}