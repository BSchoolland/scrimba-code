import { React, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */
    const [van, setVan] = useState(null)
    const { id } = useParams();
    useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setVan(data.vans[0]);
        })
    },[])
    console.log(van)
    return (
    <div>
        hello
        {van ? 
            
        <div>
            <img src={van.imageUrl} alt={van.name}/>
            <h1>{van.name}</h1>
            <h3>${van.price}/day</h3>
            <p>{van.type}</p>
        </div>
        :
        <h1>Loading...</h1>}
    </div>
    )
}
