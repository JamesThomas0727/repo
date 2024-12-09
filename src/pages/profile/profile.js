import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';

export default function Profile() {
  const [notes, setNotes] = useState(
    'Bonaparte Albert, a highly skilled developer'
  );
  const employee = {
    ID: 7,
    FirstName: 'Bonaparte',
    LastName: 'Albert',
    Prefix: 'Mr. ',
    Position: 'Controller',
    Picture: 'images/employees/07.png',
    BirthDate: new Date('2001/07/27'),
    HireDate: new Date('2021/12/08'),
    Notes: notes,
    Address: '4600 N Virginia Rd.'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profile</h2>
      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${employee.Picture
              }`}
          />
        </div>
        <h2>{notes}</h2>
        <div className='content'>
          <strong>Software Engineer | Frontend/Backend Developer</strong>
        </div>
        <div className=''>
          <p>
            Skills: C/C++, JavaScript, SQL, TypeScript, Python, HTML/CSS etc.
          </p>
        </div>
        <p>
          <b>Professional Summary</b>
          <br></br>
          I am very honored to introduce myself.
          <br></br>
          I am Bonaparte Albert, a developer highly skilled software development with
          5 years of experience for small company.
          <br></br>
          Do you try anything with me, don't you?
          <br></br>
          I won't let you down in business with me.
          <br></br>
          I know what you do want to do, I'll make it up to you!
          <br></br>
          I am looking forward to hearing from you.
          Please keep in touch.
          <br></br>
          Email: <a href='mailto:bonapartedev2001@gmail.com'>
            bonapartedev2001@gmail.com
          </a>
          <br></br>
          Thank you for paying attention!
        </p>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
