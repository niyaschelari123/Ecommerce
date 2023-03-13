import React from 'react'
import "./Super.css";
const data=[
    {
    img:"https://cdn-icons-png.flaticon.com/512/2682/2682893.png",
    name:"SuperCoin",
    },
    {
        img:"https://cdn-icons-png.flaticon.com/512/612/612885.png",
        name:"Coupons",
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/1086/1086741.png",
            name:"Credit",
            },
            {
                img:"https://cdn-icons-png.flaticon.com/512/5822/5822065.png",
                name:"Live",
                },
                {
                    img:"https://cdn-icons-png.flaticon.com/512/1378/1378644.png",
                    name:"What's New?",
                    },
                    {
                        img:"https://cdn-icons-png.flaticon.com/512/808/808439.png",
                        name:"Games",
                        },
]

function Supercoin() {
  return (
    <div className="supercoin">
      <div className="bottom">
        {data.map((item)=>{
            return(
                <>
                <div className="jkiu">
            <img src={item.img}/>
            <p>{item.name}</p>
            </div>
            </>
            )
        })}

      </div>
    </div>
  )
}

export default Supercoin
