import React from "react";
import UserCard from "./UserCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserCardGrid = ({ users}) => {
    return(
        <Row xs={1} md={2} lg={3} className="user-grid">
            {users.map((user)=>(
                <Col key={user.id}>
                    <UserCard user={user}/>
                    </Col>
                    ))}
        </Row>
    );
};

export default UserCardGrid;