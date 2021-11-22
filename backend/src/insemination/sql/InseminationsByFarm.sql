select
    c.idt_cow,
    c.idt_farm
from insemination i
    join cow c
        on i.idt_cow = c.idt_cow
where c.idt_farm = idFarm;