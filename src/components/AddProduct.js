import React, { useState } from 'react';
import axios from 'axios';
import './styles/AddProductStyle.css';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      description,
      category
    };
    try {
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div className='BodyHome'>
      <h2 className='title'>Add Product</h2>
      <form className='add-product-form' onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
