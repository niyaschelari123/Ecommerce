import React from 'react'
import Datacard from '../datacard/Datacard'
import "./Deals.css";
const data=[
    {
        name:"ʟɪᴠᴇ ꜰᴏʀ 1 ʜᴏᴜʀ",
        id:"Premium BedSheets",
        offer:"FLAT 70% Off",
        image:"https://rukminim1.flixcart.com/image/612/612/xif0q/bedsheet/s/r/m/-original-imaggvzfagqxxhjr.jpeg?q=70",
    },
    {
        name:"ʟɪᴠᴇ ꜰᴏʀ 1 ʜᴏᴜʀ",
        id:"Sports Jackets",
        offer:"Under ₹399",
        image:"https://5.imimg.com/data5/TS/PI/MY-9943219/men-s-sports-jacket-500x500.jpg",
    },
    {
        name:"ʟɪᴠᴇ ꜰᴏʀ 1 ʜᴏᴜʀ",
        id:"BT Calling | 1.8",
        offer: "Sale on 18th Nov",
        image:"https://staticimg.titan.co.in/Fastrack/Catalog/38074AP01_1.jpg",

    },
    {
        name:"ʟɪᴠᴇ ꜰᴏʀ 1 ʜᴏᴜʀ",
        id:"Spray Paints",
        offer:"From ₹119",
        image:"https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/RDMBLK4182_montana_black_spray_paint_400_ml_universe.jpg",
    },
    {
        name:"ʟɪᴠᴇ ꜰᴏʀ 1 ʜᴏᴜʀ",
        id:"Grab ₹9 deals",
        offer:"Lowest Prices",
        image:"https://www.bigbasket.com/media/uploads/p/xxl/1220767_1-fortune-fortune-chakki-fresh-atta-100-atta-0-maida-5-kg-fortune-xpert-pro-sugar-conscious-edible-oil-1-l-pouch.jpg",
    },
    {
        name:"ʟɪᴠᴇ ꜰᴏʀ 1 ʜᴏᴜʀ",
        id:"Electronics Gadgets",
        offer:"Up to 80% Off",
        image:"https://www.thebudgetdiet.com/wp-content/uploads/2014/06/Untitled.png",
    }
]

function Deals() {
  return (
    <>
    
    <div className="ordered">
    <img id="kola" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRozlBJyoIIEN20Y1rVBvMqgHn3fOwJsrL9keyB2CH9luDf1tYCzetNsd9VACGDYM_4A&usqp=CAU"/>
      {data.map((item)=>{
        return(
            <Datacard item={item} />
        )
      })}
    </div>
    </>
  )
}

export default Deals
