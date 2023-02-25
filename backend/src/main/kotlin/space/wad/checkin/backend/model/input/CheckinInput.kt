package space.wad.checkin.backend.model.input

import space.wad.checkin.backend.model.Checkin

data class CheckinInput(
    val eventId: Long,
    val participantId: Long
) {
    fun toEntity(): Checkin {
        return Checkin(null, eventId, participantId)
    }
}