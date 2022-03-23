import React,{ useEffect } from 'react'
import FormComponent from '../../components/form'
import LayoutComponent from '../../components/layout/layout'
import { FunctionalsContent } from '../../context/contextApi'

function CreateCurse() {
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
            label:'Nombre del curso',
            'placeholder':'Ejem... Tec. de lectura rapida'
          },
          {
            size:6,
            type:'select',
            url:"/api/users/list?role=instructor",
            name:'teacher',
            label:'Nombre del instructor',
            'placeholder':'Ejem... Juan Perez'
          }
      ]
    },
    {
      cols:[
         
          {
            size:6,
            type:'date',
            name:'startDate',
            label:'Fecha de inicio',
           
          },
         
          {
            size:6,
            type:'time',
            name:'startTime',
            label:'Hora de inicio',
            
          },
        

      ]
    },
    {
      cols:[
        {
          size:6,
          type:'date',
          name:'endDate',
          label:'Final del curso',
          
        },
          {
            size:6,
            type:'time',
            name:'endTime',
            label:'Hra de finalización',
           
          },
         
        
        

      ]
    },
    
    {
      cols:[
         
          {
            size:12,
            type:'upload',
            name:'image',
            label:'Subir imagen del curso',
            
          }
      ]
    },
    {
      cols:[
         
          {
            size:12,
            type:'textarea',
            name:'description',
            label:'Descripción del curso',
            'placeholder':'Platica de fisica'
          }
      ]
    },
   
    {
      cols:[
         
          {
            size:12,
            type:'button',
            name:'enviar',
            label:'Crear Curso',
            
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
    fetch(`${process.env.NEXT_PUBLIC__URL}/api/courses/new-course`,{method:'POST',body:formData}).then(res=>res.json()).then(res=>console.log(res))
  }
  
  return (
    <LayoutComponent title={"create Curse"} > 
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2 className='text-center'>
                Crear un curso
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

export default CreateCurse