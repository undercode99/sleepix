import * as React from "react";

interface ICardContentProps {
    children: React.ReactNode
}

function CardContent({ children }: ICardContentProps): JSX.Element {
    return (
        <div className="bg-white border p-4 my-4 rounded-md">
            {children}
        </div>
    );
}

export default CardContent;