export async function fetchData(startDate, endDate) {
  const apiUrl = `https://fakerapi.it/api/v1/persons?_locale=en_US&_gender=&_birthday_from=${startDate}&_birthday_to=${endDate}&_quantity=60`;
  try {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
