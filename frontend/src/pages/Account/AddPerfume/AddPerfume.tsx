import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ToastShow from "../../../component/Toasts/ToastShow";
import {addPerfume, formReset} from "../../../redux/thunks/admin-thunks";
import {AppStateType} from "../../../redux/reducers/root-reducer";
import {PerfumeErrors} from "../../../types/types";
import {fetchPerfumes} from "../../../redux/thunks/perfume-thunks";

type InitialStateType = {
    perfumeTitle: string
    perfumer: string
    year: string
    country: string
    type: string
    volume: string
    perfumeGender: string
    fragranceTopNotes: string
    fragranceMiddleNotes: string
    fragranceBaseNotes: string
    price: string
    file: string | Blob
    perfumeRating: number
};

const AddPerfume: FC = () => {
    const dispatch = useDispatch();
    const isPerfumeAdded: boolean = useSelector((state: AppStateType) => state.admin.isPerfumeAdded);
    const errors: Partial<PerfumeErrors> = useSelector((state: AppStateType) => state.admin.errors);

    const initialState: InitialStateType = {
        perfumeTitle: "",
        perfumer: "",
        year: "",
        country: "",
        type: "",
        volume: "",
        perfumeGender: "",
        fragranceTopNotes: "",
        fragranceMiddleNotes: "",
        fragranceBaseNotes: "",
        price: "",
        file: "",
        perfumeRating: 0.0
    };

    const [{
        perfumeTitle,
        perfumer,
        year,
        country,
        type,
        volume,
        perfumeGender,
        fragranceTopNotes,
        fragranceMiddleNotes,
        fragranceBaseNotes,
        price,
        file,
        perfumeRating
    }, setState] = useState(initialState);
    const [showToast, setShowToast] = useState(false);

    const {
        perfumeTitleError,
        perfumerError,
        yearError,
        countryError,
        typeError,
        volumeError,
        perfumeGenderError,
        fragranceTopNotesError,
        fragranceMiddleNotesError,
        fragranceBaseNotesError,
        priceError
    } = errors;

    useEffect(() => {
        if (isPerfumeAdded) {
            setState({...initialState});
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
                dispatch(formReset());
            }, 5000);
            window.scrollTo(0, 0);
            dispatch(fetchPerfumes());
        }
    }, [isPerfumeAdded]);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const bodyFormData: FormData = new FormData();
        bodyFormData.append("file", file);
        bodyFormData.append("perfume", new Blob([JSON.stringify({
            perfumeTitle, perfumer, year, country, type, volume, perfumeGender, fragranceTopNotes,
            fragranceMiddleNotes, fragranceBaseNotes, price, perfumeRating
        })], {type: "application/json"}));

        dispatch(addPerfume(bodyFormData));
    };

    const handleFileChange = (event: any): void => {
        setState(prevState => ({...prevState, file: event.target.files[0]}));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
        const {name, value} = event.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    return (
        <>
            <ToastShow showToast={showToast} message={"???? th??m n?????c hoa th??nh c??ng!"}/>
            <div className="container">
                <h4><FontAwesomeIcon className="mr-2" icon={faPlusSquare}/>Th??m s???n ph???m</h4>
                <br/>
                <form onSubmit={onFormSubmit}>
                    <div className="form row">
                        <div className="col">
                            <label>T??n s???n ph???m: </label>
                            <input
                                type="text"
                                className={perfumeTitleError ? "form-control is-invalid" : "form-control"}
                                name="perfumeTitle"
                                value={perfumeTitle}
                                placeholder="Nh???p t??n n?????c hoa"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{perfumeTitleError}</div>
                        </div>
                        <div className="col">
                            <label>Th????ng hi???u: </label>
                            <input
                                type="text"
                                className={perfumerError ? "form-control is-invalid" : "form-control"}
                                name="perfumer"
                                value={perfumer}
                                placeholder="Nh???p th????ng hi???u"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{perfumerError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>N??m s???n xu???t: </label>
                            <input
                                type="text"
                                className={yearError ? "form-control is-invalid" : "form-control"}
                                name="year"
                                value={year}
                                placeholder="Nh???p n??m ph??t h??nh"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{yearError}</div>
                        </div>
                        <div className="col">
                            <label>Qu???c gia s???n xu???t: </label>
                            <input
                                type="text"
                                className={countryError ? "form-control is-invalid" : "form-control"}
                                name="country"
                                value={country}
                                placeholder="Nh???p qu???c gia c???a nh?? s???n xu???t"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{countryError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Lo???i n?????c hoa: </label>
                            <select name="type"
                                    className={typeError ? "form-control is-invalid" : "form-control"}
                                    onChange={handleInputChange}>
                                <option hidden={true} value=""></option>
                                <option value="Eau de Parfum">Eau de Parfum</option>
                                <option value="Eau de Toilette">Eau de Toilette</option>
                            </select>
                            <div className="invalid-feedback">{typeError}</div>
                        </div>
                        <div className="col">
                            <label>Th??? t??ch: </label>
                            <input
                                type="text"
                                className={volumeError ? "form-control is-invalid" : "form-control"}
                                name="volume"
                                value={volume}
                                placeholder="Nh???p th??? t??ch"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{volumeError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Gi???i t??nh: </label>
                            <select name="perfumeGender"
                                    className={perfumeGenderError ? "form-control is-invalid" : "form-control"}
                                    onChange={handleInputChange}>
                                <option hidden={true} value=""></option>
                                <option value="male">Nam</option>
                                <option value="female">N???</option>
                            </select>
                            <div className="invalid-feedback">{perfumeGenderError}</div>
                        </div>
                        <div className="col">
                            <label>T???ng h????ng ?????u: </label>
                            <input
                                type="text"
                                className={fragranceTopNotesError ? "form-control is-invalid" : "form-control"}
                                name="fragranceTopNotes"
                                value={fragranceTopNotes}
                                placeholder="Nh???p t???ng h????ng ?????u"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{fragranceTopNotesError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>T???ng h????ng gi???a: </label>
                            <input
                                type="text"
                                className={fragranceMiddleNotesError ? "form-control is-invalid" : "form-control"}
                                name="fragranceMiddleNotes"
                                value={fragranceMiddleNotes}
                                placeholder="Nh???p t???ng h????ng gi???a"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{fragranceMiddleNotesError}</div>
                        </div>
                        <div className="col">
                            <label>T???ng h????ng cu???i: </label>
                            <input
                                type="text"
                                className={fragranceBaseNotesError ? "form-control is-invalid" : "form-control"}
                                name="fragranceBaseNotes"
                                value={fragranceBaseNotes}
                                placeholder="Nh???p t???ng h????ng cu???i"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{fragranceBaseNotesError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Gi??: </label>
                            <input
                                type="text"
                                className={priceError ? "form-control is-invalid" : "form-control"}
                                name="price"
                                value={price}
                                placeholder="Nh???p gi??"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{priceError}</div>
                        </div>
                        <div className="col" style={{marginTop: "35px"}}>
                            <input type="file"
                                   name="file"
                                   onChange={handleFileChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">
                        <FontAwesomeIcon className="mr-2" icon={faPlusSquare}/>Th??m
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPerfume;
