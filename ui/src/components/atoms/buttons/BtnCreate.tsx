import * as React from "react";
import BxPlusIcon from "components/atoms/icons/BxPlusIcon"

interface IPropsBtnCreate {
    text?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function BtnCreate(props: IPropsBtnCreate): JSX.Element {
    return (
        <button onClick={props.onClick} className="bg-blue-600 text-white px-3 mx-1 py-1.5 font-semibold text-base rounded-md border border-gray-200 flex items-center  focus:outline-none focus:shadow-outline-white active:bg-blue-900 transition duration-150 ease-in-out inline-flex">
            <BxPlusIcon className="text-white mx-1" /> { props.text || "Let's Create"}
        </button>
    );
}

export default BtnCreate;