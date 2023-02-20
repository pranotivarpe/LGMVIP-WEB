import React from "react";
import Card from "react-bootstrap/Card";

const UserCard = ({user})=>{
    return(
        <Card className="user-details">
            <Card.Img variant="top" className="user-img" src={user.avatar} />
            <Card.Body>
                <Card.Title>{user.first_name} {user.last_name} </Card.Title>
                <Card.Title>{user.email} </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default UserCard;