import React from 'react';
import {useNavigate} from 'react-router-dom';
import {IoMdArrowRoundBack} from "react-icons/io";

const BackButton = () => {

    const navigator = useNavigate()
    const goBackHandler = () => {
        navigator("/impostazioni")
    };

    return <IoMdArrowRoundBack size={28} cursor={"pointer"} onClick={goBackHandler}/>
};

export default BackButton;
