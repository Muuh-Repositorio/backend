with lastDiagnosis as
    (
        select
            idt_cow,
            max(insemination_date) lastDate
        from insemination
        where insemination.diagnosis = true
        group by idt_cow
    )
select
    c.*
from cow c
    left join lastDiagnosis ld
        on ld.idt_cow = c.idt_cow
where
    c.idt_situation = 4 
    and (ld.lastDate + 210) <= current_date
    and idt_farm = idFarm;