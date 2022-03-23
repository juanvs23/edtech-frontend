
import { useContext,useState,useEffect,useRef } from 'react'
import { FunctionalsContent } from '../../context/contextApi'
import styled from 'styled-components'

const PasswordWrapper= styled.div`
.eye-button{
    border:none;
    background:transparent;
    position: absolute;
    right: 9px;
    top: 15px;
    transition:0.3s all;
}
`


export default function Password({info}){
    const {formInputs, setFormInputs} =useContext(FunctionalsContent)
    const[isEmail,setEmail]=useState(true)
    const textRef=useRef()
    const confirm=useRef()
    
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
  const email= isEmail?'password':'text'
  const eyes = isEmail?'fa-eye':'fa-eye-slash'
  const eyeButton =    <button type='button' className='eye-button' onClick={()=>setEmail(isEmail=>(!isEmail))} ><i className={`fa ${eyes}`}></i></button>
    return(
      <PasswordWrapper className="row">
           <div className="col-md-6">
          <div className="form-floating mb-4">
                <input type={email} 
                className={`form-control ${isAlert}`} 
                ref={textRef} 
                name={info.name} 
                onFocus={handlerfocus} 
                onBlur={handlerBlur} 
                onChange={handler} 
                id={info.name} 
                placeholder={info.placeholder} />
                <label htmlFor={info.name}>Contraseña</label>
                {eyeButton}
          </div>
        </div>
        <div className="col-md-6">
            <div className="form-floating mb-4">
                <input type={email} 
                className={`form-control ${isAlert}`} 
                ref={confirm}  
                onFocus={handlerfocus} 
                onBlur={handlerBlur} 
                onChange={handler} 
                id={`${info.name}-confirmation`} 
                placeholder={info.placeholder} />
                <label htmlFor={`${info.name}-confirmation`}>Confirmación de contraseña</label>
             {eyeButton}
            </div>
        </div>
      </PasswordWrapper>
    )
}