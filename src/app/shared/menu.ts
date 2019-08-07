interface MenuItem {
    label: string;
    href: string;
    type: string;
    icon?: string;
    selected?: boolean;
    children?: MenuItem[];
}

export const menuItem: MenuItem[] = [
    {
        label: 'Início', type: 'level1', href: 'home', icon: 'fa-home', selected: false, children: [
            { label: 'Agenda', type: 'level2', href: 'home/agenda'},
            { label: 'Criar consulta', type: 'level2', href: 'home/criar-consulta'},
            { label: 'Cancelar consulta', type: 'level2', href: 'home/cancelar-consulta'},
            { label: 'Modificar consulta', type: 'level2', href: 'home/modificar-consulta'}
        ]
    },
    {
        label: 'Clientes', type: 'level1', href: 'clientes', icon: 'fa-user-circle', selected: false, children: [
            { label: 'Listar clientes', type: 'level2', href: 'clientes/listar-clientes'},
            { label: 'Criar clientes', type: 'level2', href: 'clientes/criar-clientes'},
            { label: 'Cancelar clientes', type: 'level2', href: 'clientes/cancelar-clientes'},
            { label: 'Modificar clientes', type: 'level2', href: 'clientes/modificar-clientes'}
        ]
    },
    {
        label: 'Opções', href: '', icon: 'fa-cog', type: 'level1', selected: false, children: []
    }
];
