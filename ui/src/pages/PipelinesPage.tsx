import PageTitle from "../components/organism/PageTitle"
import Content from "../components/organism/Content"
import BtnExport from "../components/atoms/buttons/BtnExport"
import BtnCreate from "../components/atoms/buttons/BtnCreate"

import TableStatusIndicator from "../components/molecule/pipeline/TableStatusIndicator"
import TableRunningStatus from "../components/molecule/pipeline/TableRunningStatus"
import TableAvatarUserAccess from "../components/molecule/pipeline/TableAvatarUserAccess"
import TableLabelPipeline from "../components/molecule/pipeline/TableLabelPipeline"
import FilterStatusIndicator from "../components/molecule/pipeline/FilterStatusIndicator"

// faker data
import fakeData from "../faker/DataPipelines"

import { useState } from "react"
import {
    NavLink
} from "react-router-dom";


function PipelinesPage(): JSX.Element {
    const [pipelines,] = useState(fakeData)

    const [active_pipeline, setActivePipeline] = useState(0)

    const handleClick = () => alert("Fuck!!")

    const showIndicatorPipeline = (key_pipeline: number) => setActivePipeline(key_pipeline)

    const getListPipelines = () => pipelines.filter((e) => active_pipeline !== 0 ? e.status_pipeline === active_pipeline : true)

    return (
        <Content>
            <div className="flex justify-between flex-wrap items-center">
                <PageTitle title="Data Pipelines" subtitle="Scheduler and automation data pipelines" />
                <div className="flex flex-wrap">
                    <BtnExport onClick={handleClick} />
                    <BtnCreate onClick={handleClick} />
                </div>
            </div>
            <div className="mb-4 mt-6 flex flex-wrap items-center">
                <div className="w-1/5">
                    <input className="focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none w-full text-base placeholder-gray-400 border border-gray-300 rounded-md py-1.5 px-3" type="text" placeholder="Search" />
                </div>
                <FilterStatusIndicator activate_pipeline={active_pipeline} setActive={showIndicatorPipeline} />
            </div>
            <div className="w-full">
                <div className="flex flex-wrap items-center">
                    <div className="w-1/2 opacity-40 font-semibold">Name</div>
                    <div className="w-1/6 opacity-40 font-semibold">Last Running</div>
                    <div className="w-1/6 opacity-40 font-semibold">User's Access</div>
                    <div className="w-1/6 opacity-40 font-semibold">Status</div>
                </div>
                <div className=" rounded-lg mt-4 shadow border">
                    {
                        getListPipelines().map((el, key) => {
                            return (
                                <NavLink to="/pipelines/detail" key={key} className="flex flex-wrap items-center border-b border-gray-300  p-3">
                                    <div className="w-1/2 flex flex-wrap items-center">
                                        <TableLabelPipeline title={el.title} category={el.category} status_pipeline={el.status_pipeline} />
                                    </div>
                                    <div className="w-1/6">
                                        <TableRunningStatus status_code={el.status_running} />
                                        <span className="text-gray-500 text-sm px-1 "> {el.last_running}</span>
                                    </div>
                                    <div className="w-1/6">
                                        <TableAvatarUserAccess users={el.access_users} />
                                    </div>
                                    <div className="w-1/6">
                                        <TableStatusIndicator key_indicator={el.status_pipeline} />
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </Content >
    );
}

export default PipelinesPage;