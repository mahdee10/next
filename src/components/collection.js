import champ from "../../public/imgs/champions.jpg"
import chips from "../../public/imgs/chips.jpg"
import kitkat from "../../public/imgs/kitkat.jpg"
import mouth from "../../public/imgs/mouth.jpg"
import nivea from "../../public/imgs/nivea.jpg"
import opt from "../../public/imgs/opt.jpg"
import pepsi from "../../public/imgs/pepsi.jpg"
import puck from "../../public/imgs/puck.jpg"
import Ads from "./ads"
export default function Collection(props){
    const ads=[
        {
            id:1,
            path:pepsi,
            title:"Fiz the World",
            desc:"asd aasd asd asd a sd"
        },
        {
            id:2,
            path:pepsi,
            title:"wqwdqwdqwd",
            desc:"asdas asd as d asd as d as d asd asd configurations"
        },{
            id:3,

            path:pepsi,
            title:"Challenge",
            desc:"In less tdfg dfvsf df dsf s ffs fsd "
        },{
            id:4,

            path:pepsi,
            title:"ddfvdf",
            desc:"For rdfgdf d df d df "
        },{
            id:5,
            path:pepsi,
            title:"sddshgkjuilu",
            desc:"theapp aged 6 and over wrfew we d"
        },{
            id:6,

            path:pepsi,
            title:"Taksdcs sd sd ",
            desc:"Wadad dfs sdcsd sf fs efe fd "
        },{
            id:7,

            path:pepsi,
            title:"Loy",
            desc:"dfsdcsd"
        },{
            id:8,
            path:pepsi,
            title:"asdcas",
            desc:"Ksdfsdfssdfsd df df dfdfdfsf  ewfwes 23 rw"
        },
    ]

    
    return(
        <section className="sm:px-24 mx-auto 2xl:container">
            <div className="flex  justify-between flex-row  flex-wrap  pt-10">
                        {ads.map((ad) => (
                            <Ads key={ad.id} id={ad.id} title={ad.title} desc={ad.desc} path={ad.path} />
                        ))}
                    </div>
        </section>
    )
}