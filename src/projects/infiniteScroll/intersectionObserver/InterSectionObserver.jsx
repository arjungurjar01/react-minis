import React, { useEffect, useState } from 'react'
import InfiniteScroll from './InfiniteScroll';

function InterSectionObserver() {
  const [data,setData] = useState([]);
  const [pageNo,setPageNo] = useState(1);
 
  useEffect(()=>{
   fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
   .then((res)=>res.json())
   .then((imageArr)=>{
    setData((oldData)=>[...oldData,...imageArr]);
  });
  //console.log(data)
   
  },[pageNo])

  return (
    <div className='flex flex-col items-center justify-center bg-amber-300 pt-10 h-160 overflow-auto rounded-md m-4'>
       <div className='w-full px-4'>
       <InfiniteScroll data={data} setPageNo={setPageNo} />
       </div>
    </div>
  )
}

export default InterSectionObserver ;