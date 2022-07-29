package final5.service.company;

import final5.model.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICompanyService {
    Page<Company> findAll(Pageable pageable);
}
