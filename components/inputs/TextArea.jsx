import { useContext,useEffect,useRef } from 'react'
import { FunctionalsContent } from '../../context/contextApi'


/**
 * TextArea
 * @param {prop} info 
 * @returns React.Element
 */
 export default function TextArea({info}) {
    const {formInputs, setFormInputs} =useContext(FunctionalsContent)
    const textRef=useRef()

    const { name } = info
    useEffect(()=>{
      setFormInputs((inputs)=>({...inputs,[name]:''}))
    },[])
    const handler=()=>{

      setFormInputs((inputs)=>({...inputs,[name]:textRef.current.value}))
    }
  const handlerBlur =( )=>{
    if(textRef.current.value.length<=2)  setFormInputs((inputs)=>({...inputs,[name]:'is-invalid'}))
  }
  const handlerfocus =( )=>{
  if(textRef.current.value.length>=3)  setFormInputs((inputs)=>({...inputs,[name]:textRef.current.value}))
  }
  const isAlert=(formInputs[name]==='is-invalid')?'is-invalid':''
    return(
    <div className="form-floating mb-4">
        <textarea 
        className={`form-control ${isAlert}`} 
        placeholder={info.placeholder} 
        ref={textRef}  
        onFocus={handlerfocus} 
        onBlur={handlerBlur} 
        onChange={handler}
        id={info.name} 
        name={info.name} 
        style={{height: "100px"}}></textarea>
        <label htmlFor={info.name}>{info.label}</label>
    </div>
    )
}