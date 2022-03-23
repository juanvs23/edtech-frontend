import React, { useContext,useMemo,useState,useEffect,useCallback } from 'react'

import {useDropzone} from 'react-dropzone'
import { FunctionalsContent } from '../../context/contextApi'



const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function UploadInput({info}) {

  const { setFormInputs} =useContext(FunctionalsContent)

  const { name } =info
  const [files, setFiles] = useState([]);
  
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  useEffect(()=>{
   
    if(files[0])setFormInputs((inputs)=>({...inputs,[name]:files[0]}))
  },[files])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop, maxFiles:2,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(()=>({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }),[])

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        src={file.preview}
        alt={file.name}
        style={{width:"100%",height:'auto'}}
      />
    </div>
  ));
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return(
    <section 
    className="form-label mb-4">
     
      <aside>
        {thumbs}
      </aside>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <div> {info.label}</div>
      </div>
  </section>
  )
  
}

export default UploadInput