import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const UserComponent = () => {
    const users = useSelector((state) => state.allUsers.users)
    return (
        <Row xs={1} md={2} className="g-4">
            {users.map((user) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                        </Card.Body>
                        <Button variant="outline-primary" size="sm">Details</Button>
                    </Card>
                </Col>

            ))}
        </Row>
    )
}

export default UserComponent
