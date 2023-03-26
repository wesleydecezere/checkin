package space.wad.checkin.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType.IDENTITY
import javax.persistence.Id
import javax.persistence.Table
import javax.persistence.UniqueConstraint

@Entity
@Table(uniqueConstraints = [UniqueConstraint(columnNames = ["eventId", "participantId"])])
class Checkin(
    @Id @GeneratedValue(strategy = IDENTITY) private val id: Long?,
    @Column(nullable = false) private val eventId: Long,
    @Column(nullable = false) private val participantId: Long,
    // @Column(nullable = true) private val date: Date?
)