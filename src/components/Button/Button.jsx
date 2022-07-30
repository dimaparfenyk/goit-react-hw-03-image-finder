import React from "react";
import { Button} from "./Button.styled";

export const LoadMoreBtn = ({onClick}) => {
    return (<Button type="button" onClick={onClick}>Load More</Button>
    );
}