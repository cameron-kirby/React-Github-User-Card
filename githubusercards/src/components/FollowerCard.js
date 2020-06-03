import React from 'react'
import styled from 'styled-components'

const StyledFollowerCard = styled.div`
    margin: auto;
    width: 20%;
    border: 1px solid black;
    border-radius: 20px;

    img {
        width: 70%;
        border-radius: 18px 18px 0 0;
    }
`

function FollowerCard(props){

    return(
        <StyledFollowerCard>
            <img src={props.user.avatar_url} alt='Profile' />
            <p>Username: {props.user.login}</p>
        </StyledFollowerCard>
    )
}

export default FollowerCard