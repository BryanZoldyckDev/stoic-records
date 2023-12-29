export interface NavBarInterface {
    logoUrl?: string;
    buttons: {        
        sectionName: string;
        sectionLink: string;
    }[]
}

export interface NavBarProps {
    sections: NavBarInterface
}