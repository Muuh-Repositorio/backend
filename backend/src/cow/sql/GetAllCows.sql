with
last_inemination as
    (select
        idt_cow,
        max(insemination_date) lastInsemination
     from insemination
     group by idt_cow),
last_birth as
    (select
        idt_cow,
        max(childbirth_date) lastBirth
    from childbirth
    group by idt_cow)
select
    c.idt_cow,
    c.code,
    c.name,
    c.weight,
    c.birth_date,
    tc.type,
    lb.lastBirth,
    li.lastInsemination,
    i.diagnosis,
    c.idt_situation,
    cs.situation
from cow c
    left join last_inemination li
        on li.idt_cow = c.idt_cow
    left join last_birth lb
        on lb.idt_cow = c.idt_cow
    left join insemination i
        on i.insemination_date = li.lastInsemination
               and i.idt_cow = li.idt_cow
    join type_cow tc
        on tc.idt_type = c.idt_type
    join cow_situations cs
        on c.idt_situation = cs.idt_situation
where c.idt_farm = idFarm;
