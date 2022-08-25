import PropTypes from  'prop-types';
import { Button } from "./FeedbackOptions.styled";


const FeedbackOptions  = ({ options, onChange }) => {
    return(
        options.map(option => 
            <Button key={option} type="button" name={option} onClick={onChange}>{option}</Button>
        )
    );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,    
}