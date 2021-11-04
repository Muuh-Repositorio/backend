with lastInsemination as
    (
        select
            idt_cow,
            max(insemination_date) lastDate
        from insemination
        where insemination.diagnosis = false
        group by idt_cow
    )
select
    c.*
from cow c
    left join lastInsemination li
        on li.idt_cow = c.idt_cow
where
    c.idt_situation = 3 
    and (li.lastDate + days_) <= current_date
    and idt_farm = idFarm;