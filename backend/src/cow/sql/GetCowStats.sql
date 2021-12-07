select
    c.idt_cow,
    c.name,
    c.code,
    c.weight,
    c.birth_date,
    tc.type,
    cs.situation,
    count(cb.idt_cow) as total_childbirths,
    count(i.idt_cow) as total_inseminations,
    max(i.insemination_date) as last_insemination,
    max(cb.childbirth_date) as last_childbirth,
    max(wh.update_date) as last_weight
from cow c
    left join childbirth cb
        on cb.idt_cow = c.idt_cow
    left join insemination i
        on c.idt_cow = i.idt_cow
    join type_cow tc
        on tc.idt_type = c.idt_type
    join cow_situations cs
        on c.idt_situation = cs.idt_situation
    join weight_history wh
        on c.idt_cow = wh.idt_cow
where (c.idt_cow = cowParam or c.code = cowParam) and c.idt_farm = idFarm
group by cs.situation, c.name, c.code, c.weight, c.birth_date, tc.type, c.idt_cow;