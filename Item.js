
 import React, { useState } from 'react';
 import { BsTrash } from 'react-icons/bs';

 export default function Item(props) {
   const [done, setDone] = useState(false);

   return (
     <div
       className={`cursor-pointer w-full border-b-2 p-3 flex justify-between items-center ${
         done ? 'line-through' : ''
       } select-none`}
     >
       <div onClick={() => setDone(!done)}>
         <span className='pr-2 text-[14px] text-slate-400'>{props.time}</span>
         <span className={`${done ? 'line-through' : ''} select-none text-[18px]`}>
           {props.item}
         </span>
       </div>
       <div>
         <BsTrash
           className='text-bg-red-500 cursor-pointer'
           onClick={() => props.handleDelete(props.index)}
         />
       </div>
     </div>
   );
 }






