import React from "react";
import { SocialLink } from "@/utils/links-icons";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia : React.FC = () => {
    return (
        <div className="fixed xl:flex flex-col max-w-md h-auto px-10 bottom-10 bg-transparent right-2">
            <div className="flex flex-col justify-between items-end">
                <SocialLink href="https://drive.google.com/file/d/18skvdwnflwRcPdTh4ot4LH5AWAAhdctm/view?usp=sharing" icon={<ContactPageIcon fontSize="small" />} color="#92DEEF"></SocialLink>
                <SocialLink href='https://github.com/mgrobleto' icon={<GitHubIcon fontSize='small' />} color="#92DEEF"> </SocialLink>
                <SocialLink href='https://twitter.com/marobleto_' icon={ <XIcon fontSize='small'  /> } color="#92DEEF"> </SocialLink>
                <SocialLink href='https://www.linkedin.com/in/marobleto/' icon={ <LinkedInIcon fontSize='small' /> } color="#92DEEF"> </SocialLink>
            </div>
        </div>
        
    )
}

export default SocialMedia