import instance from '../api/axios';

export const saveChecklist = async () => {
    const accessToken = localStorage.getItem('accessToken');
    
    const checklist = {
      "roomAddressId": 1,
      "collectionIdList": [],
      "roomImageIdList": [],
      "deposit": 0,
      "monthlyCost": 0,
      "managementCost": 0,
      "waterCost": true,
      "heatingCost": true,
      "electricCost": true,
      "internetCost": true,
      "area": 0,
      "building": "GOOD",
      "stationDistance": 0,
      "floor": true,
      "wall": true,
      "outside": true,
      "light": "SOUTH",
      "boiler": "INDIVIDUAL",
      "mold": true,
      "wind": true,
      "bug": true,
      "wallpaperPollution": true,
      "toilet": "GOOD",
      "washstand": "GOOD",
      "sink": "GOOD",
      "showerHead": "GOOD",
      "hotWater": "GOOD",
      "tile": "GOOD",
      "airConditioner": true,
      "refrigerator": true,
      "washingMachine": true,
      "microwave": true,
      "gasRange": true,
      "induction": true,
      "bed": true,
      "desk": true,
      "closet": true,
      "tv": true,
      "wifiRouter": true,
      "computer": true,
      "doorLock": true,
      "ventilator": true,
      "parkingLot": true,
      "cctv": true,
      "elevator": true,
      "managementOffice": true,
      "commonEntrance": true,
      "separateDischargeSpace": true,
      "note": "string",
      "imgDescription": "string"
    };
  
    const response = await instance.post(
      "/checklists",
      checklist,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
    console.log("responase", response.data);
    return response.data;
  };
  