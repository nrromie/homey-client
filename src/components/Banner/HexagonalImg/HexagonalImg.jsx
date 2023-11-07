import React from "react";

const HexagonalImage = ({ imageUrl }) => {
    const hexagonClipPath = {
        clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    };

    return (
        <div
            className="w-full h-full p-1 bg-slate-300"
            style={hexagonClipPath}
        >
            <img
                className="w-full h-full object-cover"
                src={imageUrl}
                alt="Hexagonal"
                style={hexagonClipPath}
            />
        </div>
    );
};

export default HexagonalImage;