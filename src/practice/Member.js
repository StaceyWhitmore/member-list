const Member = ({email, picture, name, location}) =>
  <div className="member">
    <h1>{name.first}{name.last}</h1>
    <img src={picture.thumbnail} alt={name.last + "_pic"}/>
    <p><a href={"mailTo:" + email}>{email}</a></p>
    <p>{location.state}, {location.city}</p>
  </div>

  export default Members
