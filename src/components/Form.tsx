import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form'

interface FormData {
    description: string;
    amount: string;
    category;
}

const Form = () => {
    const [categories, setCategories] = useState(["All Categories", "Groceries", "Utilities", "Entertainment"]);
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            description: 'milk',
            amount: '100',
            category: 'Groceries'
        }
    ]);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();


    const onSubmit = (data) => {
        if (data.category === 'All Categories') return;
        const expense = { ...data, id: expenses.length + 1 };
        setExpenses([...expenses, expense]);
    };

    const handleDelete = function (category) {
        const deletedVersion = expenses.filter(c => c.id !== category.id);
        setExpenses(deletedVersion);
    }

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
        <>
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

            <form>
                <div className='mb-3'>
                    <label htmlFor='filter' className='form-label'></label>
                    <select
                        id='filter' className='form-control'
                    >
                        {categories.map(category => <option >{category}</option>)}
                    </select>
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {expenses.map(expense => {
                            return (
                                <tr key={expense.id}>
                                    <th>{expense.id}</th>
                                    <th>{expense.description}</th>
                                    <th>${expense.amount}</th>
                                    <th>{expense.category}</th>
                                    <th>
                                        <button onClick={() => handleDelete(expense)} className="btn btn-danger">DELETE</button>
                                    </th>
                                </tr>
                            )
                        })}
                    </>

                </tbody>
            </table>
        </>

    )
}

export default Form