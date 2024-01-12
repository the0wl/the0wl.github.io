import React from 'react';
import { IoLogoHtml5 } from 'react-icons/io';
import { FaGitAlt } from 'react-icons/fa';
import { VscError, VscFolder, VscJson } from 'react-icons/vsc';

export type FileIconProps = {
  isFolder: boolean;
  filename?: string;
}

function FileIcon(props: FileIconProps) {
  if (props.isFolder) {
    return <span className='text-menuText'><VscFolder /></span>;
  }

  const type = props.filename?.split('.')[1];
  
  switch (type) {
  case 'html': return <span className='text-orange-500'><IoLogoHtml5 /></span>;
  case 'gitignore': return <span className='text-red-500'><FaGitAlt /></span>;
  case 'json': return <span className='text-blue-500'><VscJson /></span>;
  case '': return <span className='text-red-500'><VscError /></span>;
  default: return <span className='text-red-500'><VscError /></span>;
  }
}

export default FileIcon;