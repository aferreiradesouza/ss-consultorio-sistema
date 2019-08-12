interface MenuItem {
    label: string;
    href: string;
    type: string;
    icon?: string;
    active?: string;
    selected?: boolean;
    children?: MenuItem[];
}

export const menuItem: MenuItem[] = [
    {
        label: 'Início', type: 'level1', href: 'home', icon: 'fa-home', active: 'home', selected: false, children: []
    },
    {
        label: 'Médico', type: 'level1', href: 'medico', icon: 'fa-user-md', active: 'medico', selected: false, children: [
            { label: 'Agenda do dia', type: 'level2', href: 'medico/agenda-dia', active: 'medico'},
        ]
    },
    {
        label: 'Secretária', type: 'level1', href: 'secretaria', icon: 'fa-address-book', active: 'secretaria', selected: false, children: [
            { label: 'Calendário', type: 'level2', href: 'secretaria/calendario', active: 'secretaria'},
        ]
    },
    {
        label: 'Paciente', type: 'level1', href: 'paciente', icon: 'fa-user-circle', active: 'paciente', selected: false, children: [
            { label: 'Listagem de paciente', type: 'level2', href: 'paciente/listagem', active: 'paciente'},
        ]
    },
    {
        label: 'Configurações', href: '', icon: 'fa-cog', type: 'level1', selected: false, children: []
    }
];
