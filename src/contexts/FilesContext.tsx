import React, { createContext, useEffect, useState } from 'react';
import filesData from '../data/file-structure.json';

export type FileType = {
  name: string;
  closed: boolean, 
  focused: boolean;
  content: string;
  isFolder: boolean;
  folder: string;
  hide: boolean;
}

type FilesContextType = {
  files: FileType[];
  setFiles: (files: FileType[]) => void;
}

type FilesProviderType = { children: React.ReactNode}

export const FilesContext = createContext({} as FilesContextType);

export function FilesProvider({ children }: FilesProviderType) {
  const [files, setFiles] = useState<FileType[]>(filesData);

  useEffect(() => {
    for (const file of files) {
      const name = file.name.charAt(0) === '.' ? file.name.split('.')[1] : file.name.split('.')[0];
      const path = `/files/${name}.txt`;

      fetch(path)
        .then(response => response.text())
        .then(text => setFiles(files => files.map(f => f.name === file.name ? { ...f, content: text } : f)))
        .catch(error => console.error('Error fetching the text file:', error));
    }
  }, []);

  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {children}
    </FilesContext.Provider>
  );
}