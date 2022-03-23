export default function ButtonComponent({info}){
    return(
      
     <div className="d-flex justify-content-center mb-4">
        <button type="submit" className="btn btn-primary btn-lg">{info.label} </button>
     </div>
    )
  }