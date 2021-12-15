import React, { useEffect, useState } from 'react';
import Resume from './Resume';
import { useDispatch, useSelector } from 'react-redux';
import { updatePosts, updateResumes } from '../store/actions/resume';
const Main = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resume.allResumes)
  useEffect(async () => {
    await dispatch(updateResumes());
  })
  const test = {
    id:1,
    firstname: 'David',
    lastname: 'Lynch',
    age: 75,
    gender: 'MALE',
    email: 'twinpeaks@lora.com',
    profile: 'Genius',
    address: {
      country: 'Nobody',
      city: 'Knows'
    },
    phone: '89825',
    favoriteFilm: 'Iron Man 2',
    salary: 99,
    about: 'Love weather reports'
  }
  return(
    <div className="label">
      {/*{resumes.map((test) => <Resume*/}
      {/*  id={test.id}*/}
      {/*  firstname={test.firstname}*/}
      {/*  lastname={test.lastname}*/}
      {/*  age={test.age}*/}
      {/*  gernder={test.gender}*/}
      {/*  email={test.email}*/}
      {/*  profile={test.profile}*/}
      {/*  address={test.address}*/}
      {/*  phone={test.phone}*/}
      {/*  favoriteFilm={test.favoriteFilm}*/}
      {/*  salary={test.salary}*/}
      {/*  about={test.about}*/}
      {/*  />*/}
      {/*  )}*/}
      <Resume
        id={test.id}
        firstname={test.firstname}
        lastname={test.lastname}
        age={test.age}
        gender={test.gender}
        email={test.email}
        profile={test.profile}
        address={test.address}
        phone={test.phone}
        favoriteFilm={test.favoriteFilm}
        salary={test.salary}
        about={test.about}
      />
      <Resume
        id={test.id}
        firstname={test.firstname}
        lastname={test.lastname}
        age={test.age}
        gender={test.gender}
        email={test.email}
        profile={test.profile}
        address={test.address}
        phone={test.phone}
        favoriteFilm={test.favoriteFilm}
        salary={test.salary}
        about={test.about}
      />
      <Resume
        id={test.id}
        firstname={test.firstname}
        lastname={test.lastname}
        age={test.age}
        gender={test.gender}
        email={test.email}
        profile={test.profile}
        address={test.address}
        phone={test.phone}
        favoriteFilm={test.favoriteFilm}
        salary={test.salary}
        about={test.about}
      />
      <Resume
        id={test.id}
        firstname={test.firstname}
        lastname={test.lastname}
        age={test.age}
        gender={test.gender}
        email={test.email}
        profile={test.profile}
        address={test.address}
        phone={test.phone}
        favoriteFilm={test.favoriteFilm}
        salary={test.salary}
        about={test.about}
      />
      <Resume
        id={test.id}
        firstname={test.firstname}
        lastname={test.lastname}
        age={test.age}
        gender={test.gender}
        email={test.email}
        profile={test.profile}
        address={test.address}
        phone={test.phone}
        favoriteFilm={test.favoriteFilm}
        salary={test.salary}
        about={test.about}
      />
    </div>
  )
}

export default Main;
