'use client';

import React, {useContext} from "react";
import { ScrollContext } from "@/utils/scroll-observer";

import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import GitHub from "@mui/icons-material/GitHub";


const ProjectCard: React.FC = () => {
    //const { ScrollY } = useContext(ScrollContext);
    
    return (
        <div className="project-container m-auto pt-10 max-w-5xl min-h-fit">
            <div className="card-container grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="card relative flex flex-col rounded-lg bg-[#112240] p-8 hover:translate-y-8 ease-in-out transition delay-150 duration-200 hover:bg-[#233554]">
                    <div className="card-header flex flex-row justify-between p-5">
                        <div className="folder-icon" style={{color: '#92DEEF'}}> <FolderCopyTwoToneIcon fontSize="small"/></div>
                    </div>
                    <div className="card-title"></div>
                    <div className="card-description"></div>
                    <div className="card-tech"></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard