'use sever';

export const getWeapons = async () => {
  try {
    const res = await fetch('https://valorant-api.com/v1/weapons', {
      cache: 'no-cache',
      next: {
        revalidate: 3600,
      },
    });
    const data = await res.json();
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

export const getWeapon = async (id) => {
  try {
    const res = await fetch(`https://valorant-api.com/v1/weapons/${id}`, {
      cache: 'no-cache',
      next: {
        revalidate: 3600,
      },
    });
    const data = await res.json();
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
