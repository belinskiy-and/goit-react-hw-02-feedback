import Box from "components/Box";

const { Title } = require("./Section.styled")

const Section = ({ title, children }) => {
    return(
        <Box mb="15px">
            <Title>{title}</Title>
            {children}
        </Box>
    )    
}

export default Section;