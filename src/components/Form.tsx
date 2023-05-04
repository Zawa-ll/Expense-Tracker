import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { appendErrors, FieldValues, useForm } from 'react-hook-form'

interface FormData {
    description: string;
    amount: string;
    category: number;
}

const Form = () => {
    const [categories, setCategories] = useState(["All Categories", "Groceries", "Utilities", "Entertainment"]);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    console.log(errors)

    const onSubmit = (data: FieldValues) => console.log(data);

    // const [person, setPerson] = useState({
    //     description: "",
    //     amount: "",
    //     category: 0,
    // });

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     // console.log(person);
    //     console.log('Submitted!!');
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor='description' className="form-label">Description</label>
                <input
                    {...register('description', { required: true, minLength: 3 })}
                    // value={person.description}
                    // onChange={(event) => {
                    //     setPerson({ ...person, description: event.target.value })
                    // }}
                    id="description" type="text" className="form-control" />
            </div>
            {errors.description?.type === 'required' && <p className='text-danger'>The name is required</p>}
            {errors.description?.type === 'minLength' && <p className='text-danger'>The description must be at least 3 characters long</p>}


            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input
                    {...register('amount')}
                    // value={person.amount}
                    // onChange={(event) => {
                    //     setPerson({ ...person, amount: event.target.value })
                    // }}
                    id="amount" type="text" className="form-control" />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className='form-label'>All Catrgory</label>
                <select
                    {...register('category')}
                    id='category' className='form-control'
                >
                    {categories.map(category => <option>{category}</option>)}
                </select>
            </div>


            <button className="btn btn-primary" type="submit">Submit</button>

        </form>

    )
}

export default Form