const baseURL = 'http://localhost:8080'

export const getAllResumes = async () => {
  const response = await fetch(`${baseURL}/api/resume`, {
    method: 'GET'
  });
  return response.json();
}
export const getOneResume = async (id) => {
  const response = await fetch(`${baseURL}/api/resume/${id}`, {
    method: 'GET'
  });
  return response.json();
}
export const putResume = async (
  id, firstname, lastname, age, gender, email, profile, country, city, phone, favoriteFilm, salary, about
) => {
  const body = JSON.stringify({
      id, firstname, lastname, age, gender, email, profile,
      address:{country, city},
      phone, favoriteFilm, salary, about
  });
  const response = await fetch(`${baseURL}/api/resume/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return response.json();
}
export const postResume = async (
  id, firstname, lastname, age, gender, email, profile, country, city, phone, favoriteFilm, salary, about
) => {
  const body = JSON.stringify({
    id, firstname, lastname, age, gender, email, profile,
    address:{country, city},
    phone, favoriteFilm, salary, about
  });
  const response = await fetch(`${baseURL}/api/resume`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return response.json();
}
export const deleteResume = async (id) => {
  const response = await fetch(`${baseURL}/api/resume/${id}`, {
    method: 'DELETE'
  });
  return response.json();
}

