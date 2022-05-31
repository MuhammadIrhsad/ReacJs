import React from "react";
import Comment_top from "./Comment_top";
import Comment_bottom from "./Comment_bottom";
const Coment = () => {
    return <>
        <div id='Comment' className="container-fluid flex-column d-flex align-items-center justify-content-center">
            <Comment_top />
            <Comment_bottom />
        </div>
    </>
}
export default Coment;