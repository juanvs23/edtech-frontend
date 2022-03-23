import React from 'react'
import styled from 'styled-components'
import TextField from './inputs/TextField'
import SelectInput from './inputs/SelectInput'
import UploadInput from './inputs/UploadInput'
import DateInput from './inputs/DateInput'
import TextArea from './inputs/TextArea'
import RangeInput from './inputs/RangeInput'
import EmailField from './inputs/EmailField'
import ButtonComponent from './inputs/ButtonComponent'
import TimeInput from './inputs/TimeInput'
import Password from './inputs/Password'


const FormWrapper = styled.form`

`











function FormComponent({rows,callback}) {
 

  const handlerSubmit=(e)=>{
    e.preventDefault()
    callback()
  }
  
  return (
    <FormWrapper onSubmit={handlerSubmit} className="form">
   {
      rows.map((row,i)=>{
        return(
          <div key={i} className="row justify-content-center">
            {
              row.cols.map((col,index)=>{
                return(
                  <div key={index} className={`col-md-${col.size}`}>
                      {
                        (col.type==='text')?(
                         <TextField info={col} />
                        ):(col.type==='select')?(
                         <SelectInput url={col.url} info={col} />
                        ):(col.type==='upload')?(
                          <UploadInput info={col} />
                        ):(col.type==='date')?
                        (
                          <DateInput info={col}/>
                        ):(col.type==='textarea')?
                        (
                          <TextArea info={col} />
                        ):(col.type==='range')?
                        (
                          <RangeInput info={col} />
                        ):(col.type==='email')?
                        (
                          <EmailField info={col}/>
                        ):(col.type==='time')?
                        (
                          <TimeInput info={col} />
                        ):(col.type==='password')?(
                          <Password info={col} />
                        ):(
                          <ButtonComponent info={col}/>
                        )
                      }
                  </div>
                )
              })
            }
          </div>
        )
      })
   }
  </FormWrapper>
  )
}

export default FormComponent