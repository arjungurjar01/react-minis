import React, { useState } from 'react'

const THRESHOLD = 20 ;
function InfiniteScrollJs() {
    const [data,setData] = useState([...new Array(40)]);
    const [loading, setLoading] = useState(false);

    const onScrollHandler = (event)=>{
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight ;
        const scrollHeight = event.target.scrollHeight ;

        const remainingScroll = scrollHeight - (scrollTop + clientHeight);
        
        if(remainingScroll < THRESHOLD && !loading){    
            loadMore();
        }
    //   console.log(remainingScroll);
    }

    const loadMore=()=>{
        setLoading(true);
        setTimeout(()=>{
            setData((prev)=> [...prev , ...new Array(10)]);
            setLoading(false);
        },2000)
        
    }
  return (
    <div className='h-120'>
       <div onScroll={onScrollHandler} className='overflow-auto bg-amber-300 h-[80%] p-10 m-10 flex flex-col rounded-md'>
            { 
                data.map((_,index)=>{
                    return <div className='border-b border-gray-200' key={index}>{index + 1}</div>
                })
            }
            {loading && <p>Loading...</p>}
        </div>
    </div>
  )
}

export default InfiniteScrollJs