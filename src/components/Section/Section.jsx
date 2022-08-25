import Box from "components/Box";
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
    return(
        <Box mb="15px">
            <Title>{title}</Title>
            {children}
        </Box>
    )    
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,   
}

