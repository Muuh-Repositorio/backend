select
    c.idt_cow,
    c.code,
    c.name,
    c.weight,
    c.birth_date,
    tc.type,
    max(cb.childbirth_date) lastBirth,
    max(i.insemination_date) lastInsemination,
    i.diagnosis,
    c.idt_situation
from cow c
    full join childbirth cb
        on c.idt_cow = cb.idt_cow
    full join insemination i
        on c.idt_cow = i.idt_cow
    join type_cow tc
        on tc.idt_type = c.idt_type
where c.idt_farm = idFarm
group by c.idt_cow, tc.type, i.diagnosis;
