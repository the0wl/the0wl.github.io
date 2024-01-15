import React, { useContext } from 'react';
import { FileIcon } from '../../index';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { FileType, FilesContext } from '../../../contexts/FilesContext';

interface ExplorerItemProps {
  file: FileType
}

enum ExplorerItemType {
  folder,
  file
}

function ExplorerItem(props: ExplorerItemProps) {
  const { file } = props;
  const { files, setFiles } = useContext(FilesContext);

  function click(type: ExplorerItemType, pos: number) {  
    switch (type) {
    case ExplorerItemType.folder: {
      /*
        - Não altera a propriedade ``focused``, pois uma pasta não pode ser focada
        - Não altera a propriedade ``closed``, pois não possui efeito em uma pasta
        - Altera a propriedade ``hide`` da pasta e dos arquivos da pasta, para expandir/minimizar
      */
      setFiles(
        files.map((file, index) => ({
          ...file, 
          hide: ((index === pos) || (file.folder === files[pos].name)) ? !file.hide : file.hide,
        }))
      );
      break;
    }
    case ExplorerItemType.file: {
      setFiles(
        files.map(file => ({
          ...file, 
          focused: file.name === files[pos].name,
          closed: file.name === files[pos].name ? false : file.closed
        }))
      );
      break;
    }
    default:
      break;
    }
  }

  const handleOnClick = function (e: React.MouseEvent, fileName: string) {
    e.preventDefault();

    const filePos = files.findIndex(file => file.name === fileName);
    const clickedItemType = files[filePos].isFolder ? ExplorerItemType.folder : ExplorerItemType.file;

    click(clickedItemType, filePos);
  };

  function getItemStyle(file: FileType) {
    let style: string = 'flex hover:bg-menuHover cursor-pointer';

    if (file.isFolder) {
      style += ' h-8 mt-1 pl-3';
    } else {
      style += file.hide ? ' hidden' : '';
    }

    if (file.focused) {
      style += ' bg-menuHover';
    }

    return style;
  }

  function renderChevron(file: FileType) {
    let style: string = 'flex items-center';
    
    if (file.folder !== '') {
      style += ' pl-4';
    }

    const icon = file.hide ? <VscChevronRight /> : <VscChevronDown />;

    return (
      <div className={style}>
        {file.isFolder ? icon : <></>}
      </div>
    );
  }

  function renderFileIcon(file: FileType) {
    const style: string = `flex items-center pr-2 ${file.isFolder ? ' pl-1' : ' pl-8'}`;

    return (
      <div className={style}>
        <FileIcon isFolder={file.isFolder} filename={file.name} />
      </div>
    );
  }

  return (
    <div
      className={getItemStyle(file)}
      onClick={(e) => handleOnClick(e, file.name)}>
      { renderChevron(file) }
      { renderFileIcon(file) }
      <span className='text-sm leading-8 select-none'>{file.name}</span>
    </div>
  );
}

export default ExplorerItem;