import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Resume from '../components/Resume';
import { Provider } from 'react-redux';
import store from '../store/reducers';
import App from '../App';

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

const TestingFormButton = () =>(<Provider store={store}> <Resume
  id={test.id}
  firstname={test.firstname}
  lastname={test.lastname}
  age={test.age}
  gernder={test.gender}
  email={test.email}
  profile={test.profile}
  address={test.address}
  phone={test.phone}
  favoriteFilm={test.favoriteFilm}
  salary={test.salary}
  about={test.about}
  />
</Provider>)


describe('Resume component', () => {
  //Тестирование снимками
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <TestingFormButton />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  //Проверка на рендер кнопки
  it('should render button from props', () => {
    const { getByText } = render(
      <TestingFormButton />,
    )
    expect(getByText("Редактировать")).toBeInTheDocument();
  });
});
