with lastChildbirth as
    (
        select
            idt_cow,
            max(childbirth_date) lastDate
        from childbirth
        group by idt_cow
    )
select
    c.*
from cow c
    left join lastChildbirth cb
        on cb.idt_cow = c.idt_cow
where 
    (c.idt_situation = 2 or (cb.lastDate + days_) <= current_date) 
    and idt_farm = idFarm;