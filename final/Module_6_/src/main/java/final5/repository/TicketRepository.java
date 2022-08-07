package final5.repository;

import final5.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

//@Repository
@Transactional
public interface TicketRepository extends JpaRepository<Ticket,Integer> {
    @Query(value = "select * from ticket where from_place like %:start% and to_place like %:end%", nativeQuery =true)
    Page<Ticket> search(@Param("start") String start, @Param("end") String end, Pageable pageable);
}
