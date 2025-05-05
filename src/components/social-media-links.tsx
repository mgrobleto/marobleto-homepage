import React from "react";
import { AnimatedSocialLink } from "@/utils/links-icons";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Instagram } from "@mui/icons-material";

const SocialMedia : React.FC = () => {
    return (
        <div className="fixed xl:flex flex-col max-w-md h-auto px-10 bottom-10 bg-transparent right-2">
            <div className="flex flex-col justify-between items-end my-5">
                <AnimatedSocialLink 
                    href="https://drive.google.com/file/d/1SjpFJccK2wC97yKRdUwGLb0B1Qr4I5z0/view?usp=sharing" 
                    icon={<ContactPageIcon fontSize="small" />}
                    classname="hover:text-[#92DEEF]"
                    color="#92DEEF"
                >
                    Full R&eacute;sum&eacute;
                </AnimatedSocialLink>
                <AnimatedSocialLink 
                    href='https://github.com/mgrobleto' 
                    icon={<GitHubIcon fontSize='small' />} 
                    color="#92DEEF"
                    classname="hover:text-[#92DEEF]"
                > 
                    My GitHub Profile 
                </AnimatedSocialLink>
                <AnimatedSocialLink
                    href="https://www.instagram.com/marobleto/"
                    icon={<Instagram fontSize="small"/>}
                    color="#92DEEF"
                    classname="hover:text-[#92DEEF]"
                >
                    Check out my profile
                </AnimatedSocialLink>
                <AnimatedSocialLink 
                    href='https://www.linkedin.com/in/marobleto' 
                    icon={ <LinkedInIcon fontSize='small' /> } 
                    color="#92DEEF"
                    classname="hover:text-[#92DEEF]"
                >
                    Check out my Linkedln
                </AnimatedSocialLink>
            </div>
        </div>
        
    )
}

export default SocialMedia