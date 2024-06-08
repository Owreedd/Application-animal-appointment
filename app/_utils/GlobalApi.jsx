const { default: axios } = require("axios")

const API_KEY=process.env.NEXT_PUBLIC_STARPI_API_KEY

const axiosClient=axios.create({ baseURL: 'https://appointment-animal.onrender.com/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
 })
const getDoctorList=()=>axiosClient.get('/doctors?populate=*')
 const getCategory=()=>axiosClient.get('/categories?populate=*')
 const getDoctorById=(id)=>axiosClient.get('/doctors/'+id+"?populate=*")
 const deleteBooking=(id)=>axiosClient.delete('/appointments/'+id)

 const BookAppointment=(data)=>axiosClient.post('/appointments',data)
 const getUserBookingList = (userEmail) => {
  const url = `/appointments`;
  const params = {
    filters: {
      Email: {
        $eq: userEmail
      }
    },
    populate: {
      doctor: {
        populate: ['image']
      }
    }
  };

  console.log('Fetching appointments with URL:', url, 'and params:', params);

  return axiosClient.get(url, { params });
};
 const getDoctorByCategory = (category) => {
    return axiosClient.get('/doctors', {
      params: {
        'filters[categories][Name][$eq]': category,
        'populate': '*'
      }
    });

  }; 
  const sendEmail = (data) => axios.post('/api/sendEmail', data);
  export default {getCategory, getDoctorList, getDoctorByCategory, getDoctorById, BookAppointment, sendEmail,getUserBookingList,deleteBooking}