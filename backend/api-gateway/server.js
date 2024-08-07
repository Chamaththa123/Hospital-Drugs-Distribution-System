const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

const services = [
    { route: '/api/users', target: 'http://localhost:8001', serviceName: 'User Service' },
    { route: '/api/suppliers', target: 'http://localhost:8002', serviceName: 'Supplier Service' },
    { route: '/api/products', target: 'http://localhost:8003', serviceName: 'Product Service' },
  ];

  // Loop through services to create routes and proxy middleware dynamically
services.forEach(service => {
    app.use(service.route, (req, res, next) => {
      console.log(`Proxying request to ${service.serviceName}`);
      next();
    }, createProxyMiddleware({ target: service.target, changeOrigin: true }));
  });
  
  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`API Gateway started on port ${PORT}`);
  });