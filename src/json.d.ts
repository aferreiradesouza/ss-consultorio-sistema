declare module "*../../menu.json" {
    interface MenuItem {
        label: string;
        href: string;
        selected?:boolean;
        children: MenuItemChild[];
    }

    interface MenuItemChild {
        label: string;
        type: "level1" | "level2";
        href: string;
        selected?: boolean;
    }

    const value: MenuItem[];
    export default value;
}
