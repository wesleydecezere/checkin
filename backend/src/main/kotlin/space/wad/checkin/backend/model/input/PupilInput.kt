package space.wad.checkin.backend.model.input

import space.wad.checkin.backend.enum.BeltEnum
import space.wad.checkin.backend.model.Pupil

// conversãp de Pupil->PupilInput é direta (id nullable)
data class PupilInput(
    val name: String,
    val belt: BeltEnum,
    val grade: Int,
    val active: Boolean,
) {
    fun toEntity(id: Long? = null): Pupil {
        return Pupil(id, name, belt, grade, active)
    }
}