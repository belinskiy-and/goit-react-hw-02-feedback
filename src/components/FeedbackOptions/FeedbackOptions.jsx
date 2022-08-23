import { Button } from "./FeedbackOptions.styled";


const FeedbackOptions  = ({ title, onGoodChange, onNeutralChange, onBadChange }) => {
    return(
        <div>
            <h1>{title}</h1>
            <Button type="button" onClick={() => onGoodChange()}>Good</Button> 
            <Button type="button" onClick={() => onNeutralChange()}>Neutral</Button> 
            <Button type="button" onClick={() => onBadChange()}>Bad</Button> 
        </div>
    );
}

export default FeedbackOptions;