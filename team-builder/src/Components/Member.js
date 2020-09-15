import React from 'react';
import styled from 'styled-components';

function Member( { member } ) {
    const MemberTile = styled.div`
        text-align: center;
        width: 28%;
        height: 175px;
        border: 1px solid gainsboro;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 1% 0;
    `;

    return (
        <MemberTile>
            <h4>{member.name}</h4>
            <p>Role:<br />{member.role}</p>
            <p>Email:<br />{member.email}</p>
        </MemberTile>
    );
}

export default Member;