select
    c.idt_cow,
    c.idt_farm
from cow c
    join childbirth cb
        on c.idt_cow = cb.idt_cow
where c.idt_farm = idFarm;