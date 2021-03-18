import Content from "../components/organism/Content"
import PageTitle from "../components/organism/PageTitle"
import BtnCreate from "../components/atoms/buttons/BtnCreate"

function EnvironmentsPage(): JSX.Element {
    return (
        <Content>
            <div className="flex justify-between flex-wrap items-center">
                <PageTitle title="Environments" subtitle="List data pipeline, >_< Kyaaa"/>
                <BtnCreate onClick={() => console.log("Hellow")}/>
            </div>
        </Content>
    );
}

export default EnvironmentsPage;

