import BxShareAltIcon from "components/atoms/icons/BxShareAltIcon"

interface iLabelPipeline {
    category: string,
    title: string,
    status_pipeline: number
}

export default function LabelPipeline(props: iLabelPipeline): JSX.Element {
    const pipeline_code_status = [
        {
            key: 1,
            label: "INACTIVE",
            style_class: "bg-yellow-200 text-yellow-500"
        },
        {
            key: 2,
            label: "IDLE",
            style_class: "bg-gray-200 text-gray-500"
        },
        {
            key: 3,
            label: "RUNNING",
            style_class: "text-green-600 bg-green-200"
        }
    ]
    let status_active = pipeline_code_status.find(item => item.key === props.status_pipeline);

    return (<>
        <span className={`opacity-80 rounded-full p-3 ${status_active?.style_class}`}>
            <BxShareAltIcon className="text-3xl" />
        </span>
        <div className="px-4 w-9/12">
            <p className="font-medium text-xl overflow-hidden overflow-ellipsis whitespace-nowrap">{props.title} </p>
            <span className="text-sm font-normal text-gray-500">{props.category}</span>
        </div></>)
}