export const API = {
  REGISTER: "https://bootcamp-rent-cars.herokuapp.com/admin/auth/register",
  LOGIN: "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
  // GET_ORDERLIST: "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10",
  // GET_ADMIN_CARS: "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10",
  POST_CUSTOMER_ORDER: `https://bootcamp-rent-cars.herokuapp.com/customer/order`,
  // Add Car id on GET_CUSTOMER_ORDER
  GET_CUSTOMER_ORDER: `https://bootcamp-rent-cars.herokuapp.com/customer/order/`,
  GET_ORDERLIST: "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?page=1&pageSize=10",
  GET_ADMIN_CARS: "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10",
  POST_ADMIN_CAR: "https://bootcamp-rent-cars.herokuapp.com/admin/car",
};
