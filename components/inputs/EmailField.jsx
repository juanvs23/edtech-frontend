import { useContext,useEffect,useRef } from 'react'
import { FunctionalsContent } from '../../context/contextApi'
/**
 * EmailField
 * @param {prop} info 
 * @returns React.Element
 */
export default function EmailField({info}) {
    const {formInputs, setFormInputs} =useContext(FunctionalsContent)
    const textRef=useRef()
    
    const { name } = info
    useEffect(()=>{
      setFormInputs((inputs)=>({...inputs,[name]:''}))
    },[])
  const handler=()=>{

    setFormInputs((inputs)=>({...inputs,[name]:''}))
  }

  const handlerBlur =( )=>{
    const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(textRef.current.value.length>0){
      if(regex.match(textRef.current.value)) setFormInputs((inputs)=>({...inputs,[name]:'is-invalid'}))
    }else{
      setFormInputs((inputs)=>({...inputs,[name]:'is-invalid'}))
    }
  }
  const handlerfocus =( )=>{
      setFormInputs((inputs)=>({...inputs,[name]:textRef.current.value}))
  }
  const isAlert=(formInputs[name]==='is-invalid')?'is-invalid':''
    return(
      <div className="form-floating mb-4">
        <input type="email" className={`form-control ${isAlert}`} ref={textRef} name={info.name} onFocus={handlerfocus} onBlur={handlerBlur} onChange={handler} id={info.name} placeholder={info.placeholder} />
        <label htmlFor={info.name}>{info.label}</label>
      </div>
    )
}