import * as React from "react";

interface Props {
    children: React.ReactNode
}

function Content({ children }: Props): JSX.Element {
    return (
        <div className="max-w-screen-2xl w-full mt-6 px-4 mx-auto">
            {children}
        </div>
    );
}

export default Content;
