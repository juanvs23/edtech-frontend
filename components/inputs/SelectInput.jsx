import { useContext,useState,useEffect,useRef } from 'react'
import { FunctionalsContent } from '../../context/contextApi'

/**
 * SelectInput
 * @param {prop} info 
 * @returns React.Element
 */
 function SelectInput({url,info}){
    const { setFormInputs} =useContext(FunctionalsContent)
    const [options,setOptions] = useState([])
    const selectRef= useRef()
    const { name } = info
    useEffect(()=>{
      async function  getList(url){
          const fetchUser = await fetch(`${process.env.NEXT_PUBLIC__URL}${url}`,{method:'get'})
          
          const {data:{users}}=await fetchUser.json()
          
          setOptions(users)
          setFormInputs((inputs)=>({...inputs,[name]:''}))
      }
      getList(url)
    },[])
    
    const handler=()=>{
    
      setFormInputs((inputs)=>({...inputs,[name]:selectRef.current.value}))
    }

    return(
      
  <div className="form-floating mb-4">
  <select className={`form-select `} id={info.name} ref={selectRef} name={info.name} onChange={handler} aria-label={info.placeholder}>

  <option  value=''>Seleccione un {name}</option>
    {
    options.map((option,i)=><option key={i} value={option.id}>{option.name}</option>)
    }
    
  </select>
  <label  htmlFor={info.name}>{info.label}</label>
  </div>
    )
}
export default  SelectInput