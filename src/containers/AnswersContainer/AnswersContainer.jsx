import React from "react";
import {Ansewers} from "../../components/Ansewers/Ansewers";
import { useSelector} from "react-redux"
import { selectChoosenAnswer } from "../../store/modules/questionsContainer.js/selectors";

export const AnsewersContainer = ({answers}) => {
    const choosenAnswer = useSelector((state) => selectChoosenAnswer(state));
    

    return (
        <Ansewers 
            answers={answers}
            choosenAnswer = {choosenAnswer}
        >
        </Ansewers>
    );
    
}