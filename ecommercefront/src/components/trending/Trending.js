import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Trending.css";
const data=[
    {id:"1",name:"LCS-8188 TRENDING DAY & DATE FUNCTIONING Analog Watch - For Men",price:498,oprice:698,rating:"☆☆☆☆",desc:"It's verry good and I like it so much and it's loking like royal look it's so nice and amazing product Im satisfied this one and thank you flipkart and value of money I recommend all of you purchase this one.",catg:"Fashion",image:"https://rukminim1.flixcart.com/image/832/832/k7z3afk0/watch/t/c/x/lcs-8188-lois-caron-original-imafq3k9ztzdkyhe.jpeg?q=70"},
    {id:"26",name:"Small Cabin Suitcase (55 cm) - Linex Spinner 55/20 TSA-Black - Black",price:3759,oprice: 4449,rating:"☆☆☆☆",desc:"Excellent product with smooth wheels. You would definitely love it. Its a must have companion bag for you travel.",catg:"Baby Toys",image:"https://rukminim1.flixcart.com/image/832/832/kql8sy80/suitcase/f/w/z/linex-spinner-55-20-tsa-black-gh1-0-09-001-cabin-luggage-original-imag4kcyhhyk2t2d.jpeg?q=70"},
    {id:"19",name:"Apple iPhone 11 Pro Max 256GB (Midnight Green, 4GB RAM)",price:131900,oprice:149999,rating:"☆☆☆☆",desc:"16.51 cm (6.5\") LSuper Retina XDR Display | Face ID\n4 GB RAM | 256 GB ROM\n12MP + 12MP + 12MP Triple Rear Camera | 12MP Front Camera\nHexa Core Processor\n3500 mAh Battery\niOS 13\n1 year manufacturer warranty for iPhone and 6 month warranty for accessories in the box",catg:"Electronic",image:"https://img2.gadgetsnow.com/gd/images/products/additional/large/G121434_View_2/mobiles/smartphones/apple-iphone-11-pro-max-256gb-midnight-green-4gb-ram-.jpg"},
    {id:"24",name:"ALKA COMBO CR7 FOOTBALL WITH PUMP Football - Size: 5  (Pack of 2)",price:499,oprice:699,rating:"☆☆☆",desc:"Nice football",catg:"Baby Toys",image:"https://rukminim1.flixcart.com/image/416/416/jz5vjbk0/kit/z/n/n/combo-cr7-football-with-pump-ak5502-alka-original-imafj7x25zthuye4.jpeg?q=70"},
    {id:"11","name":"SONY ILCE-6100/B IN5 Mirrorless Camera Body Only  (Black)",price:56990,oprice:59999,rating:"☆☆☆☆☆",desc:"Featuring a 24.2-megapixel Exmor CMOS image sensor and the BIONZ X image processor, this mirrorless camera from Sony offers low-noise performance to ensure that your images are crystal clear. It also takes advantage of the AF Tracking Technology, so you can even click pictures of moving objects without any hassle.",catg:"Electronic",image:"https://th.bing.com/th/id/R.afc17ec47a93227985b40744f7751b19?rik=3vlJALwzZGQSIA&riu=http%3a%2f%2fkeyassets.timeincuk.net%2finspirewp%2flive%2fwp-content%2fuploads%2fsites%2f13%2f2014%2f01%2fSony_a5000_product_shot_2.jpg&ehk=63EHio1WKBg65tRStXKZmOJEAkHtZ5xbs%2bwaPlMRkOg%3d&risl=&pid=ImgRaw&r=0"}
]



function Trending() {
    const [use,setUse] = useState([]);
    const [final,setFinal] = useState([]);
    const [datas,setDatas] = useState([]);
    const uv=use.filter((item)=>item.id==1 || item.id==26 || item.id==19 || item.id==24 ||item.id==25 );

    uv.forEach((item)=>{
        item.oprice=Number(item.price)+500;
        final.push(item);
    })

    
    useEffect(()=>{
        setFinal([]);
   fetch("http://localhost:5000/products")
   .then((resp)=>resp.json())
   .then((data)=>{
    setUse(data)
   })
  
    },[])
    
    
  return (
    <>
    <h3 onClick={()=>{console.log(uv)}} id="tending" >Trending</h3>
    <div className="tremain">
        
        {uv.map((item)=>{
            return(
                <div className="try">
                    <div className="tryin">
                    <Link to={`/indprod/${item.id}`}><img src={item.image}/></Link>
                    <p id="tedt">{item.name}</p>
                    <div className="priece">
                    <p id="oprice">₹.{item.oprice}</p>
                    <p>₹.{item.price}</p>
                    </div>
                    </div>
                </div>
                
            )
        })}
        
      
    </div>
    </>
  )
}

export default Trending
