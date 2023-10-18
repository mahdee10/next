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
            path:pepsi,
            title:"Fiz the World",
            desc:"Pepsi's Expo 2022 compaign"
        },
        {
            path:puck,
            title:"A Display To Inspire The Every Day Chef",
            desc:"We created our bespoke, modular displays can be arranged in countless configurations"
        },{
            path:opt,
            title:"The Optimum Nutrition For The Optimum Challenge",
            desc:"In less than three weeks, we took the leading sports nutrition specialist Optimum Nutrition and got it in perfect shape"
        },{
            path:nivea,
            title:"Biodegradable Product in an Eco-friendly Space",
            desc:"For Nivea’s new range of biodegradable wipes, we found the perfect balance between highlighting their green credentials without casting any doubt about their make-up removal efficacy."
        },{
            path:mouth,
            title:"Even a Mouthwash Can Be A Superhero",
            desc:"We designed a cardboard sleeve to turn the bottle into a playful superhero, making it appealing to kids aged 6 and over."
        },{
            path:chips,
            title:"Taking Over the IMG World",
            desc:"When Lay’s appeared in the Lost Valley dinosaur enclosure at Dubai’s biggest indoor theme park – IMG Worlds of Adventure –"
        },{
            path:champ,
            title:"Longest Passes in History",
            desc:"PepsiCo enters the Book of World Records"
        },{
            path:kitkat,
            title:"Trick or Treat",
            desc:"KitKat Halloween full packaging driven campaign"
        },
    ]

    
    return(
        <section className="sm:px-24 mx-auto 2xl:container">
            <div className="image-container flex  justify-between flex-row  flex-wrap  pt-10">
                        {props.collections.data.map((ad) => (
                            <Ads key={ad.id} title={ad.title} desc={ad.text} path={ad.image} />
                        ))}
                    </div>
        </section>
    )
}