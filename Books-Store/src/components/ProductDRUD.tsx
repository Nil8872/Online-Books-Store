import React from 'react'
import "../index.css";
import "../styles/product.css"

  type TableData = {
    Id : number,
    ttitulo : string,
    "fonte de Dasos": string,
    query: string
  }

  // type T = number| string;

  const tableData: Array<TableData> = [
    {Id:1,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
    {Id:2,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
    {Id:3,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
    {Id:4,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
    {Id:5,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
    {Id:6,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
    {Id:7,
      ttitulo: "IBSM Followup",
      "fonte de Dasos": "Data source 2",
      query : "test"} ,
  ]
  


const ProductDRUD: React.FC = () => {
  return (
    <>
      <div className="" style={{marginTop:"32px", boxSizing:"border-box"}}>
        
        <table >
            <thead>
                <tr style={{paddingBottom:"20px", margin:"20px"}}>
                    <th style={{width:"10%"}}>Id</th>
                    <th style={{width:"15%"}}>Ttitulo</th>
                    <th style={{width:"20%"}}>Fonte De Dasos</th>
                    <th style={{width:"35%"}}>Query</th> 
                    <th style={{ width:"0.1%"}}></th>
                    <th style={{ width:"0.1%"}}></th>
                </tr>
            </thead>
            <tbody>
               { 
                tableData.map((item)=>{
                  return (
                    <>
                     <tr>
                    <td>{item.Id}</td>
                    <td>{item.ttitulo}</td>
                    <td>{item['fonte de Dasos']}</td>
                    <td>{item.query}</td>
                    <td><button className='btn' style={{ backgroundColor:"white", border:"2px solid green", color:"green", marginRight:"10px"}}>Edit</button></td>
                    <td><button className='btn' style={{ backgroundColor:"white", border:"2px solid var(--red)", color:"var(--red)"}}>Delete</button></td>
 
                </tr>
                    </>
                  )
                })
              
                }
            </tbody>
        </table>
       
      </div>
    </>
  )
}

export default ProductDRUD
