import { NavBarProps } from './types';

import * as React from "react"
 
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/NavBar"

export const NavBar:React.FC<NavBarProps> = ({sections}) => {

  const {logoUrl, buttons} = sections;

  return (
      <NavigationMenu className="justify-between w-full fixed bg-artic-lime max-w-full shadow-sm py-2">
        <NavigationMenuList className='navbar-img-container pl-8'>
            <NavigationMenuItem>
              <a href='#newrealeses'>
              <img onClick={()=>{}} className='w-40 h-auto' src={logoUrl} alt="stoic-records-logo" />
              </a>
            </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className='navbar-links pr-8'>
            {buttons.map((button, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className={
                  `cursor-emerald-24 bg-space-cadet text-maximum-blue-purple hover:text-space-cadet hover:bg-maximum-blue-purple focus:bg-maximum-blue-purple focus:text-space-cadet ${navigationMenuTriggerStyle()}`
                  } href={button.sectionLink}>
                  {button.sectionName}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>

      </NavigationMenu>
  );
} 