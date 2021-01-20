import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage(){
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        
        history.push('/news');
        
        console.log(data);
    }
    return (
        <div className="Login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" ref={register({ required: true })} />
                    {errors.firstName && "First name is required."}
                    <br/>
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" ref={register({ required: true })} />
                    {errors.lastName && "Last name is required."}
                    <br/>
                <label htmlFor="email">Email</label>
                <input name="email" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    {errors.email && errors.email.type === "required" && "Email is required"}
                    {errors.email && errors.email.type === "pattern" && "This needs to be a valid email."}
                    <br/>
                <input type="submit" />
            </form>
        </div>
    );
}

export default withRouter(LoginPage);