'use server';

export const getAgents = async () => {
  try {
    const res = await fetch('https://valorant-api.com/v1/agents', {
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

export const getAgent = async (id) => {
  try {
    const res = await fetch(`https://valorant-api.com/v1/agents/${id}`, {
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
