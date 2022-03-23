import { useContext,useEffect,useRef } from 'react'
import { FunctionalsContent } from '../../context/contextApi'
/**
 * TextField
 * @param {prop} info 
 * @returns React.Element
 */
export default function TextField({info}) {
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
        <input type="text" className={`form-control ${isAlert}`} ref={textRef} name={info.name} onFocus={handlerfocus} onBlur={handlerBlur} onChange={handler} id={info.name} placeholder={info.placeholder} />
        <label htmlFor={info.name}>{info.label}</label>
      </div>
    )
}
