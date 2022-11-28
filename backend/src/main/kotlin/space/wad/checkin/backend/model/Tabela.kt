package space.wad.checkin.backend.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Tabela(
    @Id val id: Int,
    @Column val name: String,
)