package space.wad.checkin.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType.IDENTITY
import javax.persistence.Id

@Entity
class Checkin(
    @Id @GeneratedValue(strategy = IDENTITY) private val id: Long?,
    @Column(nullable = false) private val eventId: Long,
    @Column(nullable = false) private val participantId: Long,
    // @Column(nullable = true) private val date: Date?
)