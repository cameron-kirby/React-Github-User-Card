import React from 'react'
import styled from 'styled-components'

const StyledUserCard = styled.div`
    margin: auto;
    width: 35%;
    border: 1px solid black;
    border-radius: 20px;

    img {
        width: 100%;
        border-radius: 18px 18px 0 0;
    }
`


function UserCard(props) {
    console.log(props.user)
    return(
        <StyledUserCard>
            <img src={props.user.avatar_url} alt='Profile' />
            <h2>{props.user.name}</h2>
            <p>Username: {props.user.login}</p>
            <p>Location: {props.user.location}</p>
        </StyledUserCard>
    )
}

export default UserCard