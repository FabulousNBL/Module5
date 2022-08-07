package final5.restController;

import final5.model.Company;
import final5.model.Ticket;
import final5.service.company.ICompanyService;
import final5.service.ticket.ITicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
@org.springframework.web.bind.annotation.RestController
@RequestMapping("/ticket")
public class RestController {
    @Autowired
    private ICompanyService companyService;

    @Autowired
    private ITicketService ticketService;

    @GetMapping
    public ResponseEntity<?>getAll(@RequestParam(defaultValue = "0") int page){
        Page<Ticket> ticketList = ticketService.findAll(PageRequest.of(page,2));
        return new ResponseEntity<>(ticketList, HttpStatus.OK);
    }

    @GetMapping("/company")
    public ResponseEntity<?>getCompany(@PageableDefault(value = 2) Pageable pageable){
        Page<Company> companyList = companyService.findAll(pageable);
        return new ResponseEntity<>(companyList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?>findById(@PathVariable int id){
        return new ResponseEntity<>(ticketService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createTicket(@RequestBody Ticket ticket){
        return new ResponseEntity<>(ticketService.save(ticket),HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTicket(@PathVariable Integer id, @RequestBody Ticket ticket){
        return new ResponseEntity<>(ticketService.save(ticket),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTicket(@PathVariable Integer id){
        ticketService.deleteById(id);
        System.out.println("HERE");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/search/{start}/{end}")
    public ResponseEntity<?> search(@PathVariable String start,
                                    @PathVariable String end,
                                    @RequestParam(defaultValue = "0") int page  ){
        if (start.equals(" ")){
            start= "";
        }
        if (end.equals(" ")){
            end = "";
        }
        return new ResponseEntity<>(ticketService.search(start,end,PageRequest.of(page,2)), HttpStatus.OK);
    }
}
