import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';
 
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}  
                            offset={-170}> About</SidebarLink>
                    <SidebarLink to='skillset' onClick={toggle} offset={-170}> Skillset</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle} offset={-65}> Projects</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}> Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    );
};
 
export default Sidebar;