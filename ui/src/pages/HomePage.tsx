import Content from "../components/organism/Content"
import PageTitle from "../components/organism/PageTitle"
import CardContent from "../components/organism/CardContent"

function HomePage(): JSX.Element {
    return (
        <Content>
            <PageTitle title="No Sleep" subtitle="Welcome .... " />
            <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </CardContent>
            <CardContent>
                <p className="text-base font-thin text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque incidunt voluptate accusamus sequi nulla! Minus est tempore a perferendis? Eligendi corporis aut, asperiores quidem sint ex rerum nisi. Tempora.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod voluptas quia adipisci corrupti ad, ipsam veritatis exercitationem consectetur neque cum, itaque nam excepturi! Commodi, maxime? Tenetur voluptatibus exercitationem tempore!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim veritatis accusamus nobis natus labore assumenda nesciunt dicta, saepe minima vel ipsa ipsam, illo ipsum tempora animi deserunt, commodi recusandae alias?
                </p>
            </CardContent>
        </Content>
    );
}

export default HomePage;
