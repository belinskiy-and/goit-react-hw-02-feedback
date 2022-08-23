import { Item } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    
    return(
        <div>            
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            {total !== 0 && 
                <>
                    <Item>Total: {total}</Item>
                    <Item>Positive feedback: {positivePercentage}%</Item>
                </>
            }            
        </div>
    );
}

export default Statistics;