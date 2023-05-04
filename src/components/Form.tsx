import React, { FormEvent, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Form = () => {

    const [person, setPerson] = useState({
        description: "",
        amount: "",
        category: 0,
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person);
        console.log('Submitted!!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor='description' className="form-label">Description</label>
                <input value={person.description} onChange={(event) => {
                    setPerson({ ...person, description: event.target.value })
                }} id="description" type="text" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input value={person.amount} onChange={(event) => {
                    setPerson({ ...person, amount: event.target.value })
                }} id="amount" type="text" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input value={person.category} onChange={(event) => {
                    setPerson({ ...person, category: parseInt(event.target.value) })
                }}
                    id="category" type="number" className="form-control" />
            </div>

            <button className="btn btn-primary" type="submit">Submit</button>

        </form>

    )
}

export default Form