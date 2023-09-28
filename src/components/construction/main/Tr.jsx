
import React from 'react'


function Tr({ el, idx }) {

   const tds= el.map((el,idx)=><td key={idx}>{el}</td>)

        return <tr key={idx}>
            {tds}
        </tr>
    }




export default Tr