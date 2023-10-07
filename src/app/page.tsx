"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';

export default   function Home() {
  let q: any = "Pp"
   const [data,setData ] = useState<any>([])
   const fetchData = async () => {
      const reponse = await fetch(
        "/api/test1"
      );
     // console.log("response", reponse.json())
     const c = await reponse.json()
     console.log("c", c)
     setData(c)
      return  c
   }
  
  useEffect(() => {
     
     fetchData();
   
   
  }, [ ]); 

  
  console.log("data", data)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test1 {data.map((d: any)  => d.full_name)}
     
     

    </main>
  )
}
