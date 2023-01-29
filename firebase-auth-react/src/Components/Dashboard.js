import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const { logout, currentUser } = useAuth();

  const navigate = useNavigate();
  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Dashboard</h2>

          <Form>
            <Form.Group id="email" className="mb-4">
              <Form.Label>
                Email : {currentUser && currentUser.email}
              </Form.Label>
            </Form.Group>
            <Button onClick={handleLogout} className="w-100" type="submit">
              Log Out
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Dashboard;
