import React from "react";
import { LoadMoreBtn } from "./Button.styled";

export const Button = ({onLoadMore}) => {
    return (<LoadMoreBtn type="button" onClick={onLoadMore}>Load More</LoadMoreBtn>
    );
}