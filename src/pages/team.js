
import axios from "@/utils/axios";
import Footer from "@/components/footer";
import NavBar from "@/components/nav";
import rola from "../../public/imgs/rola.png"
import beriya from "../../public/imgs/malak.png"
import matt from "../../public/imgs/matt.png"
import michel from "../../public/imgs/michel.png"
import peter from "../../public/imgs/peter.png"
import jessica from "../../public/imgs/jessica.jpg"
import Members from "@/components/members";
export default function Work({ data2 }) {

    const members = [
        {
            path: michel,
            name: "Michel Etheredge",
            role: "Studio Manager"
        },
        {
            path: matt,
            name: "Matt Fry",
            role: "3D Designer"
        },
        {
            path: beriya,
            name: "Beriya Smith",
            role: "Frontend Developer"
        },
        {
            path: rola,
            name: "Rola Nielsen",
            role: "Backend Developer"
        },
        {
            path: peter,
            name: "Peter Smith",
            role: "UX Designer"
        },
        {
            path: jessica,
            name: "Jessica Eriksen",
            role: "HR"
        },
    ]
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Geroma:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <NavBar></NavBar>
            <section className="sm:px-24 px-5 sm:pt-5 sm:pb-10 pb-14  mx-auto 2xl:container  overflow-hidden">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 ">
                    {members.map((member) => (
                        <Members key={member.name} name={member.name} role={member.role}  path={member.path} />
                    ))}
                </div>
            </section>
            <Footer social={data2.data.social_media}></Footer>
        </div>
    )
} export async function getServerSideProps({ locale }) {


    let data2;
    await axios
        .get("/settings", {
            headers: {
                "Accept-Language": locale,
            },
        })
        .then((res) => {
            data2 = res.data;
        })
        .catch(console.error);
    return { props: { data2 } };
}