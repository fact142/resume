import React, { useState } from 'react';
import { deleteResume, putResume } from '../API/resumeAPI';
import { useDispatch } from 'react-redux';
import { updateResumes } from '../store/actions/resume';


const Resume = ({
                  id, firstname, lastname, age, gender, email, profile, address, phone, favoriteFilm, salary, about
                }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [_id, setId] = useState(id);
  const [_firstname, setFirstname] = useState(firstname);
  const [_lastname, setLastname] = useState(lastname);
  const [_age, setAge] = useState(age);
  const [_gender, setGender] = useState(gender);
  const [_email, setEmail] = useState(email);
  const [_profile, setProfile] = useState(profile);
  const [_country, setCountry] = useState(address.country);
  const [_city, setCity] = useState(address.city);
  const [_phone, setPhone] = useState(phone);
  const [_favoriteFilm, setFavoriteFilm] = useState(favoriteFilm);
  const [_salary, setSalary] = useState(salary);
  const [_about, setAbout] = useState(about);




  const dispatch = useDispatch()
  const editResume = async () => {
    await putResume(
      _id, _firstname, _lastname, _age, _gender, _profile, _email,
      _country, _city, _phone, _favoriteFilm, _salary, _about,
    )
    dispatch(updateResumes())
    setIsEdit(!isEdit)
  }
  const removeResume = async () => {
    await deleteResume(id)
    dispatch(updateResumes())
  }

  return(
    (isEdit ?
        <div className="resume">
          <input value={_firstname} onChange={setFirstname} placeholder="Firstname" />
          <input value={_lastname} onChange={setLastname} placeholder="Lastname" />
          <input value={_age} onChange={setAge} placeholder="Age" />
          <input value={_gender} onChange={setGender} placeholder="Gender" />
          <input value={_email} onChange={setEmail} placeholder="Email" />
          <input value={_profile} onChange={setProfile} placeholder="Profile" />
          <input value={_country} onChange={setCountry} placeholder="Country" />
          <input value={_city} onChange={setCity} placeholder="City" />
          <input value={_phone} onChange={setPhone} placeholder="Phone" />
          <input value={_favoriteFilm} onChange={setFavoriteFilm} placeholder="Favorite Film" />
          <input value={_salary} onChange={setSalary} placeholder="Salary" />
          <input value={_about} onChange={setAbout} placeholder="Abount" />
        <button onClick={() => editResume()}>??????????????????</button>
      </div> :
        <div className="resume">
          <p>{'??????: ' +  firstname}</p>
          <p>{'??????????????: ' +  lastname }</p>
          <p>{'??????????????: ' +  age}</p>
          <p>{'??????: ' +  gender}</p>
          <p>{'?????????? ' +  email}</p>
          <p>{'??????????????????????: ' +  profile}</p>
          <p>{'??????????: ' +  address.country + ", " + address.city}</p>
          <p>{'??????????????: ' +  phone}</p>
          <p>{'?????????????? ??????????: ' +  favoriteFilm}</p>
          <p>{'??/??: ' +  salary}</p>
          <p>{'?? ????????: ' +  about}</p>
          <button onClick={() => setIsEdit(!isEdit)}>??????????????????????????</button>
          <button onClick={() => removeResume()}>??????????????</button>
        </div>)

  )
}

export default Resume;
