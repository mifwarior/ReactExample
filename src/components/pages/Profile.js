import React from 'react';
import propTypes from 'prop-types'

class Profile extends React.Component {

  render(){
    const {city, languages, social} = this.props;

    const langElements = languages.map((val, index)=>{
      return <li key={index}>{val}</li>
    })

    const socialElements = social.map((val, index)=>{
      const {label, link} = val;
      return <li key={index}><a href={link} target="_blank">{label}</a></li>
    });
    return (
      <React.Fragment>
        <h1>Profile Page</h1>
        <h2>Город: {city}</h2>
        <div>
          <h2>Знание языков:</h2>
          <ul>
            {langElements}
          </ul>
        </div>
        <div>
          <h2>Ссылки</h2>
          <ul>
            {socialElements}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  city:propTypes.string.isRequired,
  languages:propTypes.array.isRequired,
  social:propTypes.array.isRequired
}

export default Profile;