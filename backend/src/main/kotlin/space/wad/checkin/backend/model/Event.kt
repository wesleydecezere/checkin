package space.wad.checkin.backend.model

import java.util.Date
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType.IDENTITY
import javax.persistence.Id

@Entity
class Event(
    @Id @GeneratedValue(strategy = IDENTITY) private val id: Long,
    @Column(nullable = true) private val date: Date
)