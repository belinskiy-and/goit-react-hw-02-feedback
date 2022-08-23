const { Message } = require("./Notification.styled");

const Notification = ( {message} ) => { 
    return(
        <Message>{message}</Message>
    );
}

export default Notification;