import React,{ useEffect } from 'react'
import FormComponent from '../../components/form'
import LayoutComponent from '../../components/layout/layout'
import { FunctionalsContent } from '../../context/contextApi'

function CreateStudent() {
  const {formInputs, setFormInputs} =React.useContext(FunctionalsContent)
  useEffect(()=>{
    setFormInputs('')
  },[])
  const rows=[
    {
      cols:[
          {
            size:6,
            type:'text',
            name:'name',
            label:'Mombre del estudiante',
            'placeholder':'Juan Pérez'
          },
          {
            size:6,
            type:'email',
            
            name:'email',
            label:'correo del usuario',
            'placeholder':'Ejemplo@ejemplo.com'
          }
      ]
    },
   
    {
      cols:[
        {
          size:12,
          type:'password',
          name:'password',
          'placeholder':'Ejemplo@ejemplo.com',
         
          
        }
      ]
    },
    
    {
      cols:[
         
          {
            size:12,
            type:'upload',
            name:'avatar',
            label:'Subir imagen del avatar',
            
          }
      ]
    },
    
   
    {
      cols:[
         
          {
            size:12,
            type:'button',
            name:'enviar',
            label:'Registrar usuario',
            
          }
      ]
    },

  ]
  const sendDdata=()=>{
    const formData = new FormData()
   
    if(new Date(formInputs.startTime).getMilliseconds()>new Date(formInputs.endTime).getMilliseconds())console.log('true') 
    for ( const key of Object.keys(formInputs) ) {
      formData.append(key,formInputs[key]);
    }
    fetch(`${process.env.NEXT_PUBLIC__URL}/api/users/new`,{method:'POST',body:formData}).then(res=>res.json()).then(res=>console.log(res))
  }
  
  return (
    <LayoutComponent title={"create Curse"} > 
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2 className='text-center'>
                Crear usuario
              </h2>
            </div>
            <div className="card-body">
             <FormComponent rows={rows} callback={sendDdata} />
            </div>
          </div>
        </div>
      </div> 
    </LayoutComponent>
  )
}

export default CreateStudent