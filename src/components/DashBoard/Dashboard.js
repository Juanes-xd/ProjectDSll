import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:4000/products");
    setData(result.data);
  };
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:4000/product", formData);
    setData([...data, result.data]);
    handleClose();
  };
  const handleUpdate = async (id, updatedData) => {
    const result = await axios.put(
      `http://localhost:4000/product/${id}`,
      updatedData
    );
    setData(data.map((item) => (item.id === id ? result.data : item)));
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/product/${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td>{item.precio}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleUpdate(item.id, {
                        nombre: prompt("Ingrese un nuevo nombre:", item.nombre),
                      })
                    }
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={handleShow}>
          Agregar
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
