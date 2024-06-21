// const UserCard = ({image, fullName}) => {
//     return (
//         <div className="cards">
//             <img src ={image} alt = {`${fullName} profile`}  className="images"/>
//             <h3 className="full-name">{fullName}</h3>
//         </div>
//     )
// }
// export default UserCard;

function UserCard({image , fullName,age,gender,email}){
    return(
        <div>
            <img src={image} alt={`${fullName} profile`}/>
            <h2>{fullName}</h2>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{email}</p>
        </div>
    )
}
export default UserCard;