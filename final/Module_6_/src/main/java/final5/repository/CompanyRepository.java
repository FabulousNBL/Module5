package final5.repository;

import final5.model.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
//@Repository
@Transactional
public interface CompanyRepository extends JpaRepository<Company,Integer> {
//    @Query(value= "select * from company", nativeQuery = true)
//    Page<Company> findAll(Pageable pageable);
}
