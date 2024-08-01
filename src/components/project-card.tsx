'use client';

import React, {useContext} from "react";
import { ScrollContext } from "@/utils/scroll-observer";

import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import GitHubIcon from "@mui/icons-material/GitHub";
import { SocialLink } from "@/utils/links-icons";
import { TechList, WorkTech } from "./work";

interface ProjectContent {
    githubLink: string;
    websiteLink: string;
    projectTitle: string;
    projectDescription: string;
    stack: string[];
    /* role: string;
    color?: string;  */
}


const ProjectCard: React.FC<ProjectContent> = ({githubLink, websiteLink, projectTitle, projectDescription, stack}) => {
    //const { ScrollY } = useContext(ScrollContext);
    
    return (
        <div className="card group w-full h-full flex flex-col justify-between items-start p-6 rounded-lg bg-[#3e1d92] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-2xl hover:translate-y-1.5 ease-in-out transition delay-150 duration-200 hover:bg-[#3e1d92d2]">
            <div className="card-header w-full">
                <div className="card-top flex flex-row w-full justify-between items-center p-3 bg-[#92DEEF] bg-opacity-30 rounded-lg">
                    <div className="folder-icon" style={{color: '#92DEEF'}}> <FolderCopyTwoToneIcon fontSize="small"/></div>
                    <div className="flex flex-row items-center">
                        <div className="mx-3">
                            <SocialLink href={githubLink} color="#92DEEF" icon={ <GitHubIcon /> } ></SocialLink>
                        </div>
                        <div className="group-hover:translate-y-[-6px] ease-in-out transition delay-100 duration-500">
                            <SocialLink href={websiteLink} color="#92DEEF" icon={ <LaunchTwoToneIcon />}></SocialLink>
                        </div>
                    </div>
                </div>
                <div className="card-title">
                    <div className="card-title font-semibold text-white group-hover:text-theme text-xl text-justify my-4">{projectTitle}</div>
                </div>
                <div className="card-desc">
                    <div className="card-description font-light text-sm lg:text-sm text-justify tracking-tight opacity-70 mb-2">{projectDescription}</div>
                    {/* <div className="project-role font-light text-sm lg:text-sm tracking-tight opacity-70 my-2">{role}</div> */}
                </div>
            </div>
            <div className="flex flex-wrap items-start my-2">
                {stack.map((tech, i) => {
                    return (
                        <div key={i} className="mr-1.5 mb-2">
                            <div className="flex items-center rounded-full bg-theme/10 px-3 py-1 text-xs font-medium leading-5 text-theme">
                                {tech}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* <div className="card-footer grid grid-cols-4 gap-4 items-center">
                {stack.map((tech) => {
                    return (
                        <TechList tech={tech}/>
                    )
                })}
            </div> */}
        </div>
    )
}

export default ProjectCard