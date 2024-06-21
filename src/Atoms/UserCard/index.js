const UserCard = ({image, fullName}) => {
    return (
        <div className="cards">
            <img src ={image} alt = {`${fullName} profile`}  className="images"/>
            <h3 className="full-name">{fullName}</h3>
        </div>
    )
}
export default UserCard;