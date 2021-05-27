import React from 'react'

export default function pageContat({contact}) {
    return (
        <div>
            <ul>
                <li>{contact.firstName}</li>
                <li>{contact.lastName}</li>
                <li>{contact.phoneNumber}</li>
                <li>{contact.email}</li>
            </ul>
        </div>
    )
}
