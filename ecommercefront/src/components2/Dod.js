import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginActions } from '../components/slice/loginSlice';
import "./dod.css"
const data =[
    {id:"30",name:"boAt Airdopes 131 PRO with 11mm Drivers,45Hrs Playback,ASAP Charge & Quad Mic ENx Bluetooth Headset  (Active Black, Dark Grey, In the Ear)",price:1499,rating:"☆☆☆☆",desc:"With Mic:Yes\nBluetooth version: 5.3\nWireless range: 10 m\nPlayback Time: Upto 45 Hours|ASAP Charge: 5 Mins= 60 Mins\n5.Beast Mode: Low Latency for Gaming\n6.ENx Technology: For Clear Voice Calls\n7.Driver Size: 11mm",catg:"Electronic",image:"https://rukminim1.flixcart.com/image/416/416/l572ufk0/headphone/l/s/o/-original-imagfxg3e4fegjh8.jpeg?q=70",offer:"Upto 20% off"},
    {id:"29",name:"ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti/144 Hz) FX506LI-HN271TS Gaming Laptop ",price:65990,rating:"☆☆☆☆☆",desc:"NVIDIA GeForce GTX 1650 Ti\n15.6 Inch Full HD LED Backlit, IPS Anti-Glare Display (250nits Brightness, 144 Hz Refresh Rate, 45% NTSC Color Gamut, 62.5% sRGB)\nLight Laptop without Optical Disk Drive\nPre-installed Genuine Windows 10 OS\nPreloaded with MS Office",catg:"Electronic",image:"https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=70",offer:"Upto 10% off"},
    {id:"28",name:"HORLICKS Classic Malt  (2 kg)",price:933,rating:"☆☆☆☆☆",desc:"Brand\nHORLICKS\nModel Name\nClassic Malt\nQuantity\n2 kg\nContainer Type\nDrum\nFlavor\nPlain\nMaximum Shelf Life\n11 Months\nIngredients\nNA\nNutrient Content\nNA",catg:"Groceries",image:"https://rukminim1.flixcart.com/image/416/416/khdqnbk0/milk-drink-mix/e/x/r/2-classic-malt-drum-horlicks-original-imafxefxgqasazrg.jpeg?q=70",offer:"Upto 50% off"},
    {id:"27",name:"Nike Air Max TW",price:14995,rating:"☆☆☆☆",desc:"So you're in love with the classic look of the '90s, but you've got a thing for today's fast-paced culture. Meet the Air Max TW. Inspired by the treasured franchise that brought Nike Air cushioning to the world and laid the foundation for the track-to-street aesthetic, its eye-catching design delivers a 1–2 punch of comfort and fashion. Ready to highlight any 'fit, its lightweight upper pairs angular and organic lines to create an entrancing haptic effect. The contrasting colourways make it easy to style. And if you're ready for the next step, the 5 windows underfoot deliver a modern edge to visible Air cushioning.",catg:"Fashion",image:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/i/c/-original-imagg27dxvchhhzg.jpeg?q=70",offer:"Upto 30% off" },
    {
        id:"32",
        name: "Flipkart Perfect Homes Atiu Metal 4 Seater Dining Set  (Finish Color -Black, Knock Down)#JustHere",
        price: "16999",
        rating: "☆☆☆☆",
        desc: "Table Top Material: Glass\nChair Frame: Metal\nTable (W x H x D): 100 cm x 73 cm x 100 cm (3 ft 3 in x 2 ft 4 in x 3 ft 3 in)\nSeating Capacity: 4 Seater\nDelivery Condition: Knock Down - Delivered in non-assembled pieces, installation by service partner",
        catg: "Home & Garden",
        image: "https://rukminim1.flixcart.com/image/416/416/l2tcfbk0/dining-set/k/i/f/-original-image2gbzurrh2gf.jpeg?q=70",
        offer:"Upto 10% off",
    },
    {
        id:"31",
        
        name: "Google Pixel 7 Pro (Obsidian, 128 GB)  (12 GB RAM)",
        price: "84999",
        rating: "☆☆☆☆☆",
        desc: "12 GB RAM | 128 GB ROM\n17.02 cm (6.7 inch) Quad HD+ Display\n50MP + 48MP + 12MP | 10.8MP Front Camera\n4926 mAh Battery\nGoogle Tensor G2 Processor",
        catg: "Electronic",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/t/u/m/-original-imaggsuehy3nyj3b.jpeg?q=70",
        offer:"Upto 5% off",
    }
]


const quantity=1;

function Dealsod() {
    const dispatch=useDispatch();
    const [image,setImage] = useState("https://rukminim1.flixcart.com/image/416/416/l572ufk0/headphone/l/s/o/-original-imagfxg3e4fegjh8.jpeg?q=70");
    const [offer,setOffer]=useState("Upto 20% off");
    const [name,setname] = useState("boAt Airdopes 131 PRO with 11mm Drivers,45Hrs Playback,ASAP Charge & Quad Mic ENx Bluetooth Headset  (Active Black, Dark Grey, In the Ear)");
    
  
  
    return (
        <>
        <hr/>
        <span id="ontitle" >Dₑₐₗₛ ₒf ₜₕₑ dₐy</span>
    <div className="dodmain">
        
      
        {data.map((item)=>{
            const {id,name,price,rating,desc,catg,image,offer} = item;
            return(

        
        
            <div className="stuart">
                <Link to={`/indprod/${item.id}`}><img src={item.image} id="reyst" /></Link>
                <div className="bottom">
                    <p id="fds">{item.offer}</p>
                    <p id="fdss">Deals of the day</p>
                    <img id='sunak' style={{height:"40px",cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/512/8906/8906330.png" onClick={()=>{
                        axios.post("http://localhost:5000/addcart",{
                            id:id,name:name,price:price,image:image,quantity:quantity

                        }).then((resp)=>{}).catch((err)=>{})
                        dispatch(loginActions.toggle());
                    }} />
                </div>
                <p id="fdt">{item.name}</p>
                </div>
                    )
                })}

                
      
    </div>
    </>
  )
}

export default Dealsod
