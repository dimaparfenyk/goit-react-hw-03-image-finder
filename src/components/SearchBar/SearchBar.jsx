import { FiSearch } from "react-icons/fi";
import { Searchbar, SearchForm, SearchFormBtn,SearchFormBtnLabel, SearchFormInput } from "./SearchBar.styled";

export const SearchBar = (onSubmit) => {
    return (
        <Searchbar className="Searchbar">
            <SearchForm className="form">
                <SearchFormBtn type="submit" className="button">
                    <SearchFormBtnLabel className="button-label"><FiSearch/></SearchFormBtnLabel>
                </SearchFormBtn>

                <SearchFormInput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images"
                />
            </SearchForm>
        </Searchbar>
    )
};
