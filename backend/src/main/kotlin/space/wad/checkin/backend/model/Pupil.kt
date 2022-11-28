package space.wad.checkin.backend.model

import space.wad.checkin.backend.enum.BeltEnum
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Pupil(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,

    @Column(nullable = false)
    val name: String,

    @Column(nullable = false)
    val belt: BeltEnum,

    @Column(nullable = false)
    val grade: Int,

    @Column(nullable = false)
    val active: Boolean,
)