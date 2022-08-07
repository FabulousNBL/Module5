package final5.service.ticket.impl;

import final5.model.Ticket;
import final5.repository.TicketRepository;
import final5.service.ticket.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TicketService implements ITicketService {

    @Autowired
    private TicketRepository ticketRepository;
    @Override
    public Page<Ticket> findAll(Pageable pageable) {
        return ticketRepository.findAll(pageable);
    }

    @Override
    public Ticket save(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public Ticket findById(int id) {
        return ticketRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Integer id) {
         ticketRepository.deleteById(id);
    }

    @Override
    public Page<Ticket> search(String start, String end, Pageable pageable) {
        return ticketRepository.search(start, end, pageable);
    }


}
