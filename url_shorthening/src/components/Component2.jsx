import axios from 'axios';
import React, { useContext} from 'react'
import { MainContext } from '../context/ContextProvider';
import "./../assets/scss/_component2.scss"
import { useForm } from "react-hook-form";
function Component2() {
    const { description, setDescription, name, setName } = useContext(MainContext);

    const client = axios.create({
        baseURL: "https://northwind.vercel.app/api/"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, description);
    };

    function nameChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function descriptionChange(e) {
        e.preventDefault();
        setDescription(e.target.value)
    }

    const addPosts = (name, description) => {
        client
            .post('categories', {
                name: name,
                description: description,
            })
        setDescription('');
        setName('');
    };

    return (
        <section className='sect2'>
            <div className='section2'>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={nameChange} type="text" value={name} placeholder="Enter Name" required />
                    <input onChange={descriptionChange} type="text" value={description} placeholder="Enter Description" required />
                    <input type="number"  />
                    <button>Post !</button>
                </form>
            </div>
        </section>
    )
}

export default Component2