'use server';

export const getMaps = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/maps');
    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};

export const getMapById = async (id) => {
  try {
    const response = await fetch(`https://valorant-api.com/v1/maps/${id}`);
    const data = await response.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};
