package final5.service.ticket;

import final5.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ITicketService {
    Page<Ticket> findAll(Pageable pageable);
    Ticket save(Ticket ticket);
    Ticket findById(int id);
    void deleteById(Integer id);
    Page<Ticket> search( String start,  String end, Pageable pageable);
}
