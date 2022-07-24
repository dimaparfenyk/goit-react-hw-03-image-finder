import { Component } from "react";
import { FiSearch } from "react-icons/fi";
import {toast } from 'react-toastify';


import { Searchbar, SearchForm, SearchFormBtn,SearchFormBtnLabel, SearchFormInput } from "./SearchBar.styled";

export class SearchBar extends Component {
    
    state = {
        itemName: '',
    };
    
    handleNameChange = e => {
        this.setState({ itemName: e.currentTarget.value.toLowerCase() });

    };

   handleSubmit = e => {
       e.preventDefault();
       
       if (this.state.itemName.trim()==='') {
        toast.error('Введите корректное значение!', {
            position: "top-right",
            autoClose: 3000,
            });
        return
       };

       this.props.onSubmit(this.state.itemName);
       this.setState({itemName:''})
    };
    render() {
        return (
            <Searchbar className="Searchbar">
              
                <SearchForm
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <SearchFormBtn type="submit" className="button">
                        <FiSearch></FiSearch>
                        <SearchFormBtnLabel className="button-label">Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images"
                        value={this.state.itemName}
                        onChange={this.handleNameChange}
                    />
                </SearchForm>
            </Searchbar>
        )
    }
};
