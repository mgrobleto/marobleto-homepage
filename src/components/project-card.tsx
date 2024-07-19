'use client';

import React, {useContext} from "react";
import { ScrollContext } from "@/utils/scroll-observer";

import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialLink } from "@/utils/links-icons";

type ProjectTech = {
    techName: string;
}

interface ProjectContent {
    githubLink: string;
    websiteLink?: string;
    projectTitle: string;
    projectDescription: string;
    projectTech: string[];
    role: string;
    color?: string; 
}


const ProjectCard: React.FC<ProjectContent> = ({githubLink, websiteLink, projectTitle, projectDescription, projectTech, color, role}) => {
    //const { ScrollY } = useContext(ScrollContext);
    
    return (
        <div className="card w-full h-full flex flex-col justify-between items-start p-6 rounded-lg bg-[#112240] max-h-[500px] hover:translate-y-8 ease-in-out transition delay-150 duration-200 hover:bg-[#233554]">
            <div className="card-header w-full">
                <div className="card-top flex flex-row w-full justify-between items-center p-3 bg-slate-700 rounded-lg">
                    <div className="folder-icon" style={{color: '#92DEEF'}}> <FolderCopyTwoToneIcon fontSize="small"/></div>
                    <div className="flex flex-row max-w-sm justify-between items-center">
                        <div className="div">
                            <SocialLink href={githubLink} color="#92DEEF" icon={ <GitHubIcon /> } ></SocialLink>
                        </div>
                        <div className="div">
                            <SocialLink href={websiteLink} color="#92DEEF" icon={ <LaunchTwoToneIcon />} ></SocialLink>
                        </div>
                    </div>
                </div>
                <div className="card-title">
                    <div className="card-title font-semibold text-theme text-xl text-justify my-4">{projectTitle}</div>
                </div>
                <div className="card-desc">
                    <div className="card-description font-light text-sm lg:text-sm text-justify tracking-tight opacity-70 my-2">{projectDescription}</div>
                    {/* <div className="project-role font-light text-sm lg:text-sm tracking-tight opacity-70 my-2">{role}</div> */}
                </div>
            </div>
            <div className="card-footer">
                <div className="card-tech font-light text-sm lg:text-sm text-justify opacity-75 my-2 -tracking-normal">{projectTech.map(tech => tech + ' ')}</div>
            </div>
        </div>
    )
}

export default ProjectCard