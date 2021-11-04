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
    u.name user_name,
    u.phone phone,
    c.idt_cow,
    c.code,
    c.name cow_name,
    c.weight,
    li.lastDate insemination_date,
    cs.situation,
    f.name farm_name
from cow c
    left join lastInsemination li
        on li.idt_cow = c.idt_cow
    join farm f
        on f.idt_farm = c.idt_farm
    join users u
        on u.idt_user = f.idt_user
    join cow_situations cs
        on c.idt_situation = cs.idt_situation
where
    c.idt_situation = 3 
    and (li.lastDate + days_) <= current_date
    and c.idt_farm = idFarm;