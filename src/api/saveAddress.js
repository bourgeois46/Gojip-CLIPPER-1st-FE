import instance from '../api/axios';

export const saveAddress = async (addressName) => {
    let savedAddress = null;
    
    if (addressName) {
      const accessToken = localStorage.getItem('accessToken');
      console.log("address", addressName);
      const response = await instance.post(
        "/roomAddresses",
        {
          addressName: addressName
        },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
      console.log("saveAddress", response.data);
      
      localStorage.setItem('address', response.data.data.addressName);
    }
    
    return savedAddress;
  };
  
